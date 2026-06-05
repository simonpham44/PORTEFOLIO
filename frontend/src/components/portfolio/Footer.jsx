export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0a0a0a] text-white border-t border-neutral-800 px-6 lg:px-12 py-10">
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 lg:col-span-4">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500 mb-2">
            © {new Date().getFullYear()} — Simon Pham Francheteau
          </div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500">
            Conçu & développé à Nantes
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:text-center">
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-500">
            Build — v.01 / Édition monochrome
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:text-right space-x-6">
          <a
            data-testid="footer-github"
            href="https://github.com/simonpham44"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.25em] uppercase link-underline"
          >
            GitHub
          </a>
          <a
            data-testid="footer-linkedin"
            href="https://www.linkedin.com/in/simon-pham-francheteau-12689a349"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.25em] uppercase link-underline"
          >
            LinkedIn
          </a>
          <a
            data-testid="footer-mail"
            href="mailto:simon.phamfrancheteau@gmail.com"
            className="font-mono text-[10px] tracking-[0.25em] uppercase link-underline"
          >
            Mail
          </a>
        </div>
      </div>
    </footer>
  );
}
