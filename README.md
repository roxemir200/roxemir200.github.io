# Portfolio — Amir Djebbi

Portfolio statique : React 19 + TypeScript + Vite + Tailwind CSS v4, animations Framer Motion.
Aucun backend : toutes les données sont dans un seul fichier.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

## Modifier le contenu

Tout le texte (profil, expériences, projets, compétences, formation…) est dans
`src/data/portfolio.ts`. Il suffit de modifier ce fichier.

- Photo : `public/profile.png`
- CV : `public/Amir_Djebbi_CV.pdf` (FR) et `public/Amir_Djebbi_Resume_EN.pdf` (EN)
- Certificats : `public/certificates/`

## Formulaire de contact

Les messages sont envoyés par [FormSubmit](https://formsubmit.co) directement sur ton email, sans backend.

**Après le déploiement :** envoyer un message de test depuis le site en ligne, puis cliquer sur
**Activate Form** dans l'email reçu de FormSubmit (vérifier les spams). Renvoyer un message pour confirmer.
L'activation faite depuis `localhost` ne compte pas pour le site en ligne.

Alternative si FormSubmit pose problème : [Web3Forms](https://web3forms.com). Coller la clé reçue par email
dans `contactForm.web3formsKey` (`src/data/portfolio.ts`) et le formulaire l'utilisera automatiquement.
- Capture d'un projet : déposer l'image dans `public/projects/` puis renseigner `image: 'projects/nom.png'` dans le projet.

## Structure

```
src/
  data/portfolio.ts      # toutes les données
  components/
    Navbar.tsx           # navigation, section active, thème clair/sombre
    Hero.tsx             # présentation, chiffres clés
    About.tsx            # à propos
    Experience.tsx       # timeline des stages
    Projects.tsx         # projets phares + grille filtrable
    Skills.tsx           # compétences par catégorie
    Competitive.tsx      # TCPC, HackerRank, Codeforces
    Education.tsx        # formation, certifications, langues, engagement
    Contact.tsx          # coordonnées + formulaire (mailto)
    ui.tsx, icons.tsx    # composants et icônes partagés
```

## Build de production

```bash
npm run build
```

Le dossier `dist/` est prêt à être déployé (GitHub Pages, Vercel, Netlify) : les chemins sont relatifs.
