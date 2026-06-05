const quotes = [
  {
    text: "Simon a cette rare capacité à transformer une exigence floue en une architecture lisible. Sa rigueur et son écoute font la différence dès la première itération.",
    name: "Enseignant — IUT de Nantes",
    role: "Encadrant de projet",
  },
  {
    text: "Méthodique, curieux, et toujours prêt à challenger une solution pour en proposer une plus simple. Un profil à suivre.",
    name: "Camarade de promotion",
    role: "BUT Informatique",
  },
  {
    text: "Sur notre projet STI2D, Simon a porté la partie système embarquée avec un sens du détail remarquable.",
    name: "Professeur — Lycée Livet",
    role: "Spécialité SIN",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="px-6 lg:px-12 py-24 lg:py-32 border-b border-neutral-200"
    >
      <div className="grid grid-cols-12 gap-8 mb-16">
        <div className="col-span-12 lg:col-span-3">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            05 — Recommandations
          </div>
          <div className="font-display text-3xl lg:text-4xl tracking-tight uppercase">
            Ils en parlent
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {quotes.map((q, i) => (
          <figure
            key={i}
            data-testid={`testimonial-${i}`}
            className="col-span-12 md:col-span-6 lg:col-span-4 border-t border-[#0a0a0a] pt-6"
          >
            <div className="font-display text-7xl leading-none text-[#0a0a0a] mb-2">
              "
            </div>
            <blockquote className="font-body text-base lg:text-lg leading-relaxed text-[#0a0a0a]">
              {q.text}
            </blockquote>
            <figcaption className="mt-6">
              <div className="font-display text-lg">{q.name}</div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mt-1">
                {q.role}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
