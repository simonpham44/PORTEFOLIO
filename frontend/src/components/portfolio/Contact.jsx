import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Merci de remplir tous les champs.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message envoyé. Je reviens vers toi rapidement.");
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Une erreur est survenue. Réessaye dans un instant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-[#0a0a0a] text-white px-6 lg:px-12 py-24 lg:py-32"
    >
      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-12 lg:col-span-3">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            07 — Contact
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2
            data-testid="contact-title"
            className="font-display text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-[-0.05em] uppercase"
          >
            Disons<br />
            <span className="italic font-light">bonjour.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mt-20">
        <div className="col-span-12 lg:col-span-4 space-y-10">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Email
            </div>
            <a
              data-testid="contact-email"
              href="mailto:simon.phamfrancheteau@gmail.com"
              className="link-underline font-display text-xl lg:text-2xl"
            >
              simon.phamfrancheteau@gmail.com
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Téléphone
            </div>
            <a
              data-testid="contact-phone"
              href="tel:+33699401930"
              className="link-underline font-display text-xl lg:text-2xl"
            >
              06 99 40 19 30
            </a>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Localisation
            </div>
            <div className="font-display text-xl">Nantes, France</div>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-3">
              Suivez le travail
            </div>
            <div className="flex flex-col gap-2">
              <a
                data-testid="contact-github"
                href="https://github.com/simonpham44"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-display text-lg w-fit"
              >
                GitHub ↗
              </a>
              <a
                data-testid="contact-linkedin"
                href="https://www.linkedin.com/in/simon-pham-francheteau-12689a349"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-display text-lg w-fit"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          data-testid="contact-form"
          className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-8"
        >
          <div>
            <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Nom
            </label>
            <input
              data-testid="contact-name-input"
              type="text"
              value={form.name}
              onChange={handle("name")}
              required
              className="w-full bg-transparent border-b border-neutral-700 focus:border-white outline-none py-3 font-display text-xl placeholder-neutral-600 transition-colors"
              placeholder="Comment t'appelles-tu ?"
            />
          </div>
          <div>
            <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Email
            </label>
            <input
              data-testid="contact-email-input"
              type="email"
              value={form.email}
              onChange={handle("email")}
              required
              className="w-full bg-transparent border-b border-neutral-700 focus:border-white outline-none py-3 font-display text-xl placeholder-neutral-600 transition-colors"
              placeholder="adresse@domaine.com"
            />
          </div>
          <div>
            <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-2">
              Message
            </label>
            <textarea
              data-testid="contact-message-input"
              value={form.message}
              onChange={handle("message")}
              required
              rows={5}
              className="w-full bg-transparent border-b border-neutral-700 focus:border-white outline-none py-3 font-display text-xl placeholder-neutral-600 resize-none transition-colors"
              placeholder="Raconte ton projet, une opportunité, ou une simple curiosité…"
            />
          </div>

          <button
            data-testid="contact-submit-button"
            type="submit"
            disabled={loading}
            className="group inline-flex items-center gap-4 border border-white px-8 py-4 font-mono text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-[#0a0a0a] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>
              {loading ? "Envoi en cours…" : sent ? "Message envoyé" : "Envoyer le message"}
            </span>
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
