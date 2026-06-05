const items = [
  "Architecture Logicielle",
  "Java",
  "Python",
  "C / C++",
  "Linux & Réseau",
  "Conception centrée utilisateur",
  "SQL",
  "Web Full-Stack",
  "Algorithmie",
  "Méthode Agile",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section data-testid="marquee-section" className="border-y border-neutral-200 py-6 overflow-hidden bg-[#fafafa]">
      <div className="flex marquee-track whitespace-nowrap">
        {row.map((it, i) => (
          <div key={i} className="flex items-center gap-12 px-8">
            <span className="font-display text-3xl lg:text-4xl tracking-tight">
              {it}
            </span>
            <span className="font-mono text-xs text-neutral-400">— /// —</span>
          </div>
        ))}
      </div>
    </section>
  );
}
