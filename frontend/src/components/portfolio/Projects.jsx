const projects = [
  {
    n: "01",
    year: "2024 — 2025",
    title: "Baudrier à reconnaissance vocale & IA",
    subtitle: "Projet phare — Assistance connectée mains-libres",
    role: "Conception du circuit électronique & supervision du prototype",
    tech: ["Arduino", "Bluetooth HC-05", "API ChatGPT", "IoT"],
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    description:
      "Assistance connectée mains-libres pour les couvreurs sur les chantiers. Le système permet de poser des questions techniques en direct à une IA ou de contrôler des modules sans lâcher ses outils — sécurité et productivité accrues.",
    span: "lg:col-span-12",
    ratio: "aspect-[21/9]",
    flag: "Projet phare",
  },
  {
    n: "02",
    year: "2023 — 2024",
    title: "Robot porte-matériel autonome",
    subtitle: "Projet STI2D — Automatisation logistique",
    role: "Conception mécatronique & planification",
    tech: ["SolidWorks", "Infrarouge", "GANTT", "Robotique"],
    img: "https://images.unsplash.com/photo-1581090700227-1e8e3a5b4b9f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Robot chariot autonome capable de suivre un tracé au sol via des capteurs infrarouges, avec une gestion fluide des courbes et des phases d'accélération. Pensé pour les flux logistiques en milieu industriel.",
    span: "lg:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    n: "03",
    year: "2021 — 2022",
    title: "Robot de combat autonome — Sumo",
    subtitle: "Stratégie algorithmique & détection réflexe",
    role: "Algorithme, design & impression 3D",
    tech: ["Scratch", "Google SketchUp", "Impression 3D"],
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Robot autonome conçu pour éjecter ses adversaires du Dohyo. Intègre des capteurs de contraste pour détecter les bords et éviter les sorties de piste accidentelles.",
    span: "lg:col-span-5",
    ratio: "aspect-[4/5]",
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
              {p.flag && (
                <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.25em] uppercase bg-[#0a0a0a] text-white px-2 py-1">
                  ★ {p.flag}
                </div>
              )}
            </div>
            <div className="flex items-start justify-between mt-4 gap-6">
              <div>
                <h3 className="font-display text-2xl lg:text-3xl tracking-tight">
                  {p.title}
                </h3>
                <div className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-500 mt-1">
                  {p.subtitle}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-end max-w-[55%]">
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
            <p className="font-body text-sm text-neutral-700 mt-3 max-w-2xl">
              {p.description}
            </p>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mt-2">
              Mon rôle — {p.role}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
