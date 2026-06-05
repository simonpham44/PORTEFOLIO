import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "experience", label: "Parcours" },
  { id: "projects", label: "Projets" },
  { id: "testimonials", label: "Recommandations" },
  { id: "blog", label: "Journal" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        data-testid="site-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#fafafa]/90 backdrop-blur-sm border-b border-neutral-200" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 py-5">
          <button
            data-testid="nav-logo"
            onClick={() => go("hero")}
            className="font-mono text-xs tracking-[0.25em] uppercase"
          >
            SPF
            <span className="inline-block w-1 h-1 bg-[#0a0a0a] ml-2 align-middle" />
          </button>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-${l.id}-link`}
                onClick={() => go(l.id)}
                className="link-underline font-mono text-xs tracking-[0.2em] uppercase text-neutral-700 hover:text-black"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 hidden" />
            <button
              data-testid="nav-cta"
              onClick={() => go("contact")}
              className="border border-[#0a0a0a] px-4 py-2 font-mono text-xs tracking-[0.2em] uppercase hover:bg-[#0a0a0a] hover:text-white transition-colors duration-300"
            >
              Disponible
            </button>
          </div>

          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden font-mono text-xs tracking-[0.2em] uppercase"
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div
          data-testid="mobile-menu"
          className="fixed inset-0 z-40 bg-[#fafafa] flex flex-col items-start justify-center px-6 gap-6 lg:hidden"
        >
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`mnav-${l.id}-link`}
              onClick={() => go(l.id)}
              className="font-display text-4xl tracking-tighter"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
