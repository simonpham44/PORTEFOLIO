const timeline = [
  {
    period: "2024 — En cours",
    title: "BUT Informatique",
    org: "IUT de Nantes",
    description:
      "Formation en ingénierie logicielle, bases de données, réseaux et conception orientée objet. Projets en équipe sur des cas concrets.",
    tags: ["Java", "SQL", "UML", "Agile"],
  },
  {
    period: "2024",
    title: "Baccalauréat STI2D — option SIN",
    org: "Lycée Livet, Nantes — Mention Assez Bien",
    description:
      "Sciences et Technologies de l'Industrie. Spécialisation Systèmes d'Information & Numérique. Programmation embarquée et électronique appliquée.",
    tags: ["Python", "Arduino", "Réseaux"],
  },
  {
    period: "2021",
    title: "Brevet des collèges",
    org: "Mention Assez Bien",
    description:
      "Premier jalon académique — bases solides en sciences et culture générale.",
    tags: [],
  },
];

const hobbies = [
  { label: "VTT", sub: "CCT" },
  { label: "Volley-ball", sub: "Club" },
  { label: "Natation", sub: "8 ans — ASPTT" },
  { label: "Solfège", sub: "6 ans" },
  { label: "Danse du dragon", sub: "GDPT" },
];

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="px-6 lg:px-12 py-24 lg:py-32 border-b border-neutral-200"
    >
      <div className="grid grid-cols-12 gap-8 mb-16">
        <div className="col-span-12 lg:col-span-3">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            03 — Parcours
          </div>
          <div className="font-display text-3xl lg:text-4xl tracking-tight uppercase">
            Chronologie
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-5">
          <p className="font-body text-base lg:text-lg text-neutral-700 leading-relaxed">
            Une trajectoire qui mêle rigueur académique et pratique terrain — du
            baccalauréat technologique à l'informatique appliquée.
          </p>
        </div>
      </div>

      <ol className="grid grid-cols-12 gap-8">
        {timeline.map((step, i) => (
          <li
            key={i}
            data-testid={`exp-item-${i}`}
            className="col-span-12 lg:col-span-10 lg:col-start-3 relative pl-8 lg:pl-12 border-l border-[#0a0a0a] py-6 group"
          >
            <span className="absolute -left-[6px] top-9 w-3 h-3 bg-[#0a0a0a] group-hover:bg-white border border-[#0a0a0a] transition-colors duration-300" />
            <div className="grid grid-cols-12 gap-4 items-start">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-500">
                  {step.period}
                </div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display text-2xl lg:text-3xl tracking-tight">
                  {step.title}
                </h3>
                <div className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-500 mt-1 mb-3">
                  {step.org}
                </div>
                <p className="font-body text-base text-neutral-700 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
                {step.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {step.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] tracking-[0.2em] uppercase border border-[#0a0a0a] px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* Divers & Loisirs */}
      <div className="grid grid-cols-12 gap-8 mt-24">
        <div className="col-span-12 lg:col-span-3">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            Divers & Loisirs
          </div>
          <div className="font-display text-2xl lg:text-3xl tracking-tight uppercase">
            Au-delà du code
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-[#0a0a0a]">
            {hobbies.map((h, i) => (
              <li
                key={h.label}
                data-testid={`hobby-${i}`}
                className="border-r border-b border-[#0a0a0a] p-6 hover:bg-[#0a0a0a] hover:text-white transition-colors duration-300"
              >
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-3">
                  0{i + 1}
                </div>
                <div className="font-display text-xl lg:text-2xl tracking-tight">
                  {h.label}
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mt-2">
                  {h.sub}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
