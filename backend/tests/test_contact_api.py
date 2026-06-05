"""Backend tests for portfolio contact API"""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://clean-showcase-50.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health check
def test_root_hello_world(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert r.json() == {"message": "Hello World"}


# Contact - valid payload should send via Resend
def test_contact_valid_payload(client):
    payload = {
        "name": "TEST_Tester",
        "email": "TEST_tester@example.com",
        "message": "Hello, this is an automated portfolio contact test message.",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, f"Body: {r.text}"
    data = r.json()
    assert data.get("status") in ("success", "stored")
    assert "email_sent" in data
    if data["email_sent"]:
        assert "email_id" in data


# Contact - invalid email format should 422
def test_contact_invalid_email(client):
    r = client.post(f"{API}/contact", json={
        "name": "TEST_Tester",
        "email": "not-an-email",
        "message": "hi",
    })
    assert r.status_code == 422


# Contact - missing fields should 422
def test_contact_missing_name(client):
    r = client.post(f"{API}/contact", json={"email": "TEST_a@b.com", "message": "hi"})
    assert r.status_code == 422


def test_contact_missing_message(client):
    r = client.post(f"{API}/contact", json={"name": "TEST_x", "email": "TEST_a@b.com"})
    assert r.status_code == 422


def test_contact_empty_message(client):
    r = client.post(f"{API}/contact", json={"name": "TEST_x", "email": "TEST_a@b.com", "message": ""})
    assert r.status_code == 422
