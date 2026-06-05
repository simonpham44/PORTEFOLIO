# PRD — Portfolio Simon Pham Francheteau

## Problem statement (verbatim)
"je veux faire un portefolio de moi super style avec des belle animations et plus dans un style epure avec des couleur claire et quelque touche de couleur la ou il faut pour bien mettre en valeur les choses. je te met ici le lien d'un debut de site que j'ai essayer https://simonpham44.github.io/portfolio/index.html mais je trouve quil manque plein de truc je veux vraiment un site complet"

## User
Simon Pham Francheteau — étudiant BUT Informatique à Nantes, parcours STI2D (Lycée Livet, mention).

## Stack
- Frontend: React 19, Tailwind, framer-motion (installed), Lenis (smooth scroll), Sonner toast.
- Backend: FastAPI, MongoDB (Motor), Resend (email).
- Hosting: Emergent preview.

## Implemented (Dec 2025)
- Custom cursor (dot + ring with lerp).
- Lenis smooth scroll + IntersectionObserver reveal animations.
- Sticky nav with scroll-state, smooth section navigation, mobile menu.
- Hero: massive Cabinet Grotesk typography, live Nantes clock, grid overlay.
- Marquee infinite scroll of skills.
- About: bio verbatim, B&W portrait, stat tiles.
- Skills: 4-category bento grid with hover-invert.
- Experience: vertical timeline with dots & tags.
- Projects: 3 placeholder projects (Tetris asymmetric grid, hover overlays).
- Testimonials: 3 typographic quotes.
- Blog: 4 placeholder articles (table-row hover invert).
- Contact: dark inverted section, real email send via Resend (configured), Mongo audit trail.
- Footer with socials.
- Strict monochrome (black / white / gray); grain texture overlay.

## Tested
- E2E iteration_1.json — backend 100%, frontend 100%.

## Backlog (P1)
- Replace placeholder projects with real ones (links, screenshots, case studies).
- Replace portrait with Simon's real picture.
- Add real blog articles or remove the section if not used.
- Connect a custom domain in Resend for delivery to any inbox (currently restricted by Resend test mode).

## Backlog (P2)
- View transitions API for sub-pages (project detail).
- Add an `/api/cv` endpoint to serve a downloadable PDF résumé.
- Multilingual EN/FR toggle.
