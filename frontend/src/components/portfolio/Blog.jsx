const articles = [
  {
    date: "12.2025",
    title: "Penser une API REST comme un produit, pas comme une plomberie",
    cat: "Architecture",
    read: "6 min",
  },
  {
    date: "10.2025",
    title: "Pourquoi UML reste un super-pouvoir en 2025",
    cat: "Méthode",
    read: "4 min",
  },
  {
    date: "07.2025",
    title: "Du STI2D au BUT — retour sur une bascule technique",
    cat: "Parcours",
    read: "5 min",
  },
  {
    date: "04.2025",
    title: "Construire son premier kernel embarqué en C : journal de bord",
    cat: "Embarqué",
    read: "8 min",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      data-testid="blog-section"
      className="px-6 lg:px-12 py-24 lg:py-32 border-b border-neutral-200"
    >
      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-12 lg:col-span-3">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            06 — Journal
          </div>
          <div className="font-display text-3xl lg:text-4xl tracking-tight uppercase">
            Écrits
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-5">
          <p className="font-body text-base lg:text-lg text-neutral-700 leading-relaxed">
            Notes techniques, retours d'expérience et carnets de bord — pour
            structurer ma pensée et partager ce que j'apprends.
          </p>
        </div>
      </div>

      <ul className="border-t border-[#0a0a0a]">
        {articles.map((a, i) => (
          <li
            key={i}
            data-testid={`blog-${i}`}
            data-cursor="hover"
            className="border-b border-[#0a0a0a] group cursor-none"
          >
            <a
              href="#"
              className="grid grid-cols-12 gap-4 items-center py-6 lg:py-8 px-2 transition-all duration-300 group-hover:px-6 group-hover:bg-[#0a0a0a] group-hover:text-white"
            >
              <span className="col-span-3 lg:col-span-2 font-mono text-xs tracking-[0.2em] text-neutral-500 group-hover:text-neutral-400">
                {a.date}
              </span>
              <span className="col-span-9 lg:col-span-7 font-display text-xl lg:text-3xl tracking-tight">
                {a.title}
              </span>
              <span className="hidden lg:block col-span-2 font-mono text-xs tracking-[0.2em] uppercase text-neutral-500 group-hover:text-neutral-400">
                {a.cat} — {a.read}
              </span>
              <span className="col-span-12 lg:col-span-1 text-right font-display text-2xl">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
