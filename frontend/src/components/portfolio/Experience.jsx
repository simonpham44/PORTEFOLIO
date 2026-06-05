const timeline = [
  {
    period: "2024 — Présent",
    title: "BUT Informatique",
    org: "IUT de Nantes",
    description:
      "Formation en ingénierie logicielle, bases de données, réseaux et conception orientée objet. Projets en équipe sur des cas concrets.",
    tags: ["Java", "SQL", "UML", "Agile"],
  },
  {
    period: "2022 — 2024",
    title: "Baccalauréat STI2D — option SIN",
    org: "Lycée Livet, Nantes — Mention",
    description:
      "Sciences et Technologies de l'Industrie. Spécialisation Systèmes d'Information & Numérique. Programmation embarquée et électronique appliquée.",
    tags: ["Python", "Arduino", "Réseaux"],
  },
  {
    period: "Projets & Bénévolat",
    title: "Initiatives personnelles",
    org: "Apprentissage continu",
    description:
      "Veille technologique permanente, contributions open-source, expérimentation autour des architectures modernes.",
    tags: ["OSS", "Veille"],
  },
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
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
