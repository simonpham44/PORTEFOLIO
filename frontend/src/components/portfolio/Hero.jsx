import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const opts = { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" };
      setTime(d.toLocaleTimeString("fr-FR", opts) + " — Nantes");
    };
    update();
    const i = setInterval(update, 30000);
    return () => clearInterval(i);
  }, []);

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-end px-6 lg:px-12 pb-12 pt-32 overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div className="h-full w-full grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-black" />
          ))}
        </div>
      </div>

      <div className="relative grid grid-cols-12 gap-4 mb-12">
        <div className="col-span-12 lg:col-span-6">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-4">
            Portfolio — 2025 / Édition 01
          </div>
          <p className="font-body text-sm sm:text-base text-neutral-700 max-w-md leading-relaxed">
            Étudiant en BUT Informatique à Nantes. Je conçois des architectures
            techniques fiables, en partant de problématiques réelles du terrain.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:col-start-10 text-right">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500">
            {time}
          </div>
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mt-1">
            47.2184° N — 1.5536° W
          </div>
        </div>
      </div>

      <h1
        data-testid="hero-title"
        className="font-display text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.85] tracking-[-0.05em] text-[#0a0a0a]"
      >
        <span data-reveal className="reveal-line">
          <span className="reveal-inner">SIMON</span>
        </span>
        <span data-reveal className="reveal-line">
          <span className="reveal-inner block">
            PHAM<span className="inline-block w-[0.15em]" />
            <span className="italic font-light tracking-tight">francheteau</span>
          </span>
        </span>
      </h1>

      <div className="relative mt-10 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-2">
            Spécialité
          </div>
          <div className="font-display text-2xl">
            Ingénierie&nbsp;Logicielle <span className="text-neutral-400">/</span>{" "}
            Architecture
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:col-start-6">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-2">
            Statut
          </div>
          <div className="flex items-center gap-2">
            <span className="relative inline-flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-[#0a0a0a] animate-ping opacity-70" />
              <span className="relative inline-block w-2 h-2 rounded-full bg-[#0a0a0a]" />
            </span>
            <span className="font-mono text-xs tracking-[0.25em] uppercase">
              Ouvert aux stages
            </span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:col-start-10 text-right">
          <div className="font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 mb-2">
            Scroll
          </div>
          <div className="relative ml-auto w-px h-12 overflow-hidden bg-neutral-300 scroll-line" />
        </div>
      </div>
    </section>
  );
}
