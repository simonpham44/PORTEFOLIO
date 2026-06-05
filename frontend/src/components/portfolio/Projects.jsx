const projects = [
  {
    n: "01",
    year: "2025",
    title: "ATLAS — Plateforme web",
    role: "Conception & Dev Full-Stack",
    tech: ["React", "FastAPI", "MongoDB"],
    img: "https://images.pexels.com/photos/8408534/pexels-photo-8408534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Plateforme de gestion documentaire avec architecture modulaire, authentification et tableau de bord en temps réel.",
    span: "lg:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    n: "02",
    year: "2024",
    title: "KERNEL.IO",
    role: "Architecture logicielle",
    tech: ["Java", "UML", "Patterns"],
    img: "https://images.unsplash.com/photo-1572202485378-d934798763cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNvZnR3YXJlJTIwY29kZSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3ODA2OTMxMjJ8MA&ixlib=rb-4.1.0&q=85",
    description:
      "Étude et implémentation de design patterns appliqués à un système métier complexe — refacto progressive.",
    span: "lg:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    n: "03",
    year: "2024",
    title: "SIGNAL — Système embarqué",
    role: "STI2D / Hardware-Software",
    tech: ["C", "Arduino", "TCP/IP"],
    img: "https://images.unsplash.com/photo-1706509511714-2a1e0f74321e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc4MDY5MzEyMnww&ixlib=rb-4.1.0&q=85",
    description:
      "Capteurs connectés communiquant via protocole personnalisé. Interface mobile minimaliste pour la supervision.",
    span: "lg:col-span-12",
    ratio: "aspect-[21/9]",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="px-6 lg:px-12 py-24 lg:py-32 border-b border-neutral-200"
    >
      <div className="grid grid-cols-12 gap-8 mb-16">
        <div className="col-span-12 lg:col-span-3">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            04 — Travaux
          </div>
          <div className="font-display text-3xl lg:text-4xl tracking-tight uppercase">
            Projets
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-5 flex items-end justify-between">
          <p className="font-body text-base lg:text-lg text-neutral-700 leading-relaxed max-w-md">
            Une sélection de projets — réalisés en équipe ou en autonomie —
            illustrant ma démarche : comprendre, concevoir, livrer.
          </p>
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 hidden lg:block">
            03 projets
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {projects.map((p, i) => (
          <a
            key={p.n}
            href="#"
            data-testid={`project-${i}`}
            data-cursor="hover"
            className={`project-card col-span-12 ${p.span} block group`}
          >
            <div className={`relative overflow-hidden border border-neutral-200 ${p.ratio}`}>
              <img
                src={p.img}
                alt={p.title}
                className="project-img absolute inset-0 w-full h-full object-cover img-grayscale"
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/50 transition-colors duration-500 flex items-end p-6">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase">
                    Voir l'étude de cas →
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.25em] uppercase bg-[#fafafa] px-2 py-1">
                {p.n} / {p.year}
              </div>
            </div>
            <div className="flex items-start justify-between mt-4">
              <div>
                <h3 className="font-display text-2xl lg:text-3xl tracking-tight">
                  {p.title}
                </h3>
                <div className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-500 mt-1">
                  {p.role}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-end max-w-[60%]">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-[0.2em] uppercase border border-[#0a0a0a] px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-body text-sm text-neutral-700 mt-3 max-w-xl">
              {p.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
