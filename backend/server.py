from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
CONTACT_RECIPIENT = os.environ.get('CONTACT_RECIPIENT', '')

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessage(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=1, max_length=5000)


def build_html(name: str, email: str, message: str) -> str:
    safe_msg = message.replace('\n', '<br/>')
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;padding:32px 0;font-family:Arial,Helvetica,sans-serif;">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e5e5;">
          <tr><td style="padding:32px 32px 16px 32px;">
            <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#777;">Portfolio / Contact</div>
            <h1 style="font-size:24px;color:#0a0a0a;margin:8px 0 24px 0;letter-spacing:-0.5px;">Nouveau message</h1>
            <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#777;margin-top:16px;">De</div>
            <div style="font-size:16px;color:#0a0a0a;margin-top:4px;">{name}</div>
            <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#777;margin-top:16px;">Email</div>
            <div style="font-size:16px;color:#0a0a0a;margin-top:4px;">{email}</div>
            <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#777;margin-top:24px;">Message</div>
            <div style="font-size:15px;color:#222;line-height:1.6;margin-top:8px;border-top:1px solid #e5e5e5;padding-top:12px;">{safe_msg}</div>
          </td></tr>
          <tr><td style="padding:16px 32px;border-top:1px solid #e5e5e5;font-size:11px;color:#999;letter-spacing:1px;text-transform:uppercase;">Sent via simonpham.dev contact form</td></tr>
        </table>
      </td></tr>
    </table>
    """


@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/contact")
async def send_contact(payload: ContactMessage):
    # Save to Mongo first (audit trail)
    doc = {
        "id": str(uuid.uuid4()),
        "name": payload.name,
        "email": payload.email,
        "message": payload.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.contact_messages.insert_one(doc)

    if not resend.api_key or not CONTACT_RECIPIENT:
        logger.warning("Resend not configured. Message stored only.")
        return {"status": "stored", "email_sent": False}

    params = {
        "from": SENDER_EMAIL,
        "to": [CONTACT_RECIPIENT],
        "reply_to": payload.email,
        "subject": f"Portfolio — Nouveau message de {payload.name}",
        "html": build_html(payload.name, payload.email, payload.message),
    }

    try:
        email = await asyncio.to_thread(resend.Emails.send, params)
        return {"status": "success", "email_sent": True, "email_id": email.get("id") if isinstance(email, dict) else None}
    except Exception as e:
        logger.error(f"Failed to send contact email: {e}")
        # Still success because message stored — but signal to user
        raise HTTPException(status_code=500, detail="Email delivery failed, message stored.")


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
