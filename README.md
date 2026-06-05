# Portfolio — Simon Pham Francheteau

Site statique mono-fichier (`index.html`) prêt pour **GitHub Pages**.

## 🚀 Déployer sur GitHub Pages

1. Crée un repo GitHub (ex : `simonpham44/portfolio-v2`).
2. Pousse uniquement le fichier `index.html` à la racine.
3. Dans le repo : **Settings → Pages → Source: `main` / root → Save**.
4. Ton site sera disponible à `https://simonpham44.github.io/portfolio-v2/` (quelques minutes).

> Tu peux aussi simplement ouvrir `index.html` en local (double-clic) — tout fonctionne, formulaire de contact inclus (il ouvre ton client mail).

## ✨ Ce qui est inclus

- Design strict monochrome (noir / blanc / gris)
- Animations : curseur custom, smooth scroll natif, reveals au scroll, marquee infini, hover-invert
- 7 sections complètes : Hero, À propos, Compétences, Parcours + Loisirs, Projets (avec panneaux d'étude de cas dépliables), Recommandations, Journal, Contact
- Projet **Robot porte-matériel autonome** détaillé à partir du rapport d'activité (PDF lié)
- Lien direct de téléchargement du **CV PDF** (nav + contact + footer)
- Formulaire de contact via `mailto:` (pré-rempli, ouvre Gmail / Mail / Outlook…)
- Aucun build, aucune dépendance npm, aucun backend

## 📝 Personnalisation rapide

Tout est dans `index.html` :
- **Coordonnées** : ctrl+F `simon.phamfrancheteau@gmail.com` et `0699401930`
- **Projets** : recherche les blocs `<article class="proj…`
- **CV / PDFs** : les liens pointent vers les assets Emergent (tu peux les remplacer par tes propres URLs ou par des fichiers locaux dans le repo)

## 🔁 Si tu préfères héberger les PDFs dans le repo
1. Crée un dossier `assets/` dans le repo.
2. Place-y `cv.pdf` et `chariot.pdf`.
3. Dans `index.html`, remplace les URLs `customer-assets.emergentagent.com/...` par `./assets/cv.pdf` et `./assets/chariot.pdf`.

---
Build statique généré le {date} — basé sur la version full-stack initiale (React + FastAPI + Resend).
