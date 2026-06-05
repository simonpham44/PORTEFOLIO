export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="px-6 lg:px-12 py-24 lg:py-32 border-b border-neutral-200"
    >
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-3">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            01 — À propos
          </div>
          <div className="font-display text-3xl lg:text-4xl tracking-tight uppercase">
            Profil
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <p className="font-body text-xl lg:text-2xl leading-snug tracking-tight text-[#0a0a0a]">
            Passionné par l'innovation technologique et fort d'un{" "}
            <span className="italic font-medium">Baccalauréat STI2D</span> (option SIN)
            obtenu avec mention au <span className="italic font-medium">Lycée Livet</span>, je
            développe mes compétences en ingénierie logicielle au sein du{" "}
            <span className="italic font-medium">BUT Informatique de Nantes</span>.
          </p>
          <p className="font-body text-base leading-relaxed text-neutral-600 mt-8 max-w-md">
            Mon but ? Partir d'une problématique réelle sur le terrain pour concevoir
            une architecture technique fiable, optimisée et centrée sur l'utilisateur.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-12 max-w-md">
            <div className="border-t border-[#0a0a0a] pt-3">
              <div className="font-display text-3xl">02</div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mt-1">
                Diplômes obtenus
              </div>
            </div>
            <div className="border-t border-[#0a0a0a] pt-3">
              <div className="font-display text-3xl">∞</div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mt-1">
                Curiosité technique
              </div>
            </div>
            <div className="border-t border-[#0a0a0a] pt-3">
              <div className="font-display text-3xl">2025</div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mt-1">
                Année en cours
              </div>
            </div>
            <div className="border-t border-[#0a0a0a] pt-3">
              <div className="font-display text-3xl">Nantes</div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mt-1">
                Basé à
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 lg:col-start-10">
          <div className="aspect-[3/4] overflow-hidden border border-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1592246030975-b7d803d99e6a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHlvdW5nJTIwbWFufGVufDB8fHxibGFja19hbmRfd2hpdGV8MTc4MDY5MzEyMnww&ixlib=rb-4.1.0&q=85"
              alt="Portrait Simon"
              className="w-full h-full object-cover img-grayscale"
              data-testid="about-portrait"
            />
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mt-3">
            Portrait — N&B / 2025
          </div>
        </div>
      </div>
    </section>
  );
}
