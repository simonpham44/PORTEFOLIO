const categories = [
  {
    title: "Programmation",
    items: ["Java", "Python", "C / C++", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "Architecture Logicielle",
    items: ["UML", "Design Patterns", "API REST", "Microservices", "Git Flow", "TDD"],
  },
  {
    title: "Système & Réseau",
    items: ["Linux", "TCP/IP", "Docker", "Embedded (SIN)", "Sécurité", "DNS"],
  },
  {
    title: "Outils & Méthode",
    items: ["Agile / Scrum", "Figma", "Notion", "VS Code", "JetBrains", "Postman"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="px-6 lg:px-12 py-24 lg:py-32 border-b border-neutral-200"
    >
      <div className="grid grid-cols-12 gap-8 mb-16">
        <div className="col-span-12 lg:col-span-3">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            02 — Compétences
          </div>
          <div className="font-display text-3xl lg:text-4xl tracking-tight uppercase">
            Stack
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-5">
          <p className="font-body text-base lg:text-lg text-neutral-700 leading-relaxed">
            Une palette d'outils choisie pour répondre à des contraintes réelles —
            du code bas niveau aux architectures distribuées, en passant par la
            méthode agile.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#0a0a0a]">
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            data-testid={`skill-cat-${idx}`}
            className="border-r border-b border-[#0a0a0a] p-8 group hover:bg-[#0a0a0a] hover:text-white transition-colors duration-500"
          >
            <div className="flex items-baseline justify-between mb-8">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 group-hover:text-neutral-400">
                0{idx + 1}
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 group-hover:text-neutral-400">
                {cat.items.length} items
              </div>
            </div>
            <h3 className="font-display text-xl lg:text-2xl tracking-tight mb-6">
              {cat.title}
            </h3>
            <ul className="space-y-1">
              {cat.items.map((it) => (
                <li
                  key={it}
                  className="font-mono text-sm flex items-center justify-between border-b border-neutral-200 group-hover:border-neutral-800 py-1.5"
                >
                  <span>{it}</span>
                  <span className="opacity-30">→</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
