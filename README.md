<div align="center">

# 🍽️ FoodHouse

**Site web premium pour un restaurant africain gastronomique à Porto-Novo (Bénin)**

[![Astro](https://img.shields.io/badge/Astro-7.0.8-BC52EE?style=flat-square&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel)](https://foodhouse-omega.vercel.app/)

[🌐 Voir le site en ligne](https://foodhouse-omega.vercel.app/)

</div>

---

## 📖 À propos du projet

FoodHouse est un **site web vitrine haut de gamme** conçu pour un restaurant africain gastronomique. Le projet combine **design éditorial inspiré des magazines de mode**, **animations 3D subtiles** et **parcours de commande / réservation sans friction**.

Ce projet démontre la maîtrise de :

- ✅ **Design éditorial premium** — typographie serif, grilles asymétriques, storytelling en chapitres
- ✅ **Animations modernes** — CSS 3D, tilt au survol, révélations au scroll, lightbox
- ✅ **Développement Astro** — composants `.astro`, SSR/SSG, optimisation performance
- ✅ **Intégration d'API réelles** — FedaPay (paiement Mobile Money) + WhatsApp Business
- ✅ **Responsive pixel-perfect** — du mobile 360px au desktop 4K
- ✅ **Accessibilité** — ARIA, prefers-reduced-motion, contrastes AA

---

## ✨ Fonctionnalités clés

### 🏠 Landing page narrative en 4 chapitres

Un système éditorial de numérotation (`Chapitre 01`, `Chapitre 02`, ...) qui raconte l'univers du restaurant comme un magazine de luxe :

| # | Section | Description |
|---|---|---|
| — | **Hero** | Couverture immersive avec typographie signature |
| **01** | **L'Esprit** | Section À propos avec 5 avantages + décorations animées |
| **02** | **La Carte** | 3 plats signatures avec commande WhatsApp + FedaPay |
| **03** | **Le Visuel** | Galerie 3D de 8 œuvres culinaires avec lightbox |
| **04** | **La Table** | Wizard de réservation en 3 étapes avec acompte en ligne |

### 🍽️ Menu avec commande en ligne complète

- Grille de 3 plats en colonnes égales
- Clic sur l'image **ou** le bouton → même action
- Modal client (nom, téléphone, email)
- Paiement sécurisé via **FedaPay** (Mobile Money MTN/Moov, cartes bancaires)
- Redirection automatique vers **WhatsApp** avec récap de commande

### 🎨 Galerie 3D immersive

- **Desktop** : grille 12 colonnes asymétrique, tilt 3D au survol (perspective + lerp fluide), halo pointeur, lightbox plein écran
- **Mobile** : 2 colonnes avec zigzag alterné, hauteurs réduites, badges compacts
- Grain cinéma, filets bordeaux, chiffre fantôme éditorial

### 📅 Réservation wizard en 3 étapes

1. **Le moment** — Date, heure, couverts (segmented control)
2. **Coordonnées** — Nom, téléphone, email
3. **Confirmation** — Message + récap dynamique + paiement acompte

FedaPay + WhatsApp intégrés de bout en bout.

### 💬 ChatWidget flottant

Accès rapide à WhatsApp depuis n'importe quelle page.

---

## 🛠️ Stack technique

| Catégorie | Technologie |
|---|---|
| **Framework** | [Astro](https://astro.build) 7.0.8 (SSG) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + CSS natif |
| **Langage** | TypeScript / JavaScript vanilla |
| **Animations** | CSS 3D (transforms, perspective), Intersection Observer, requestAnimationFrame |
| **Paiement** | [FedaPay](https://fedapay.com) (Mobile Money + CB) |
| **Messagerie** | WhatsApp Business via `wa.me/` |
| **Déploiement** | [Vercel](https://vercel.com) (CI/CD auto sur push) |
| **Versioning** | Git + GitHub |

---

## 🎨 Ce qui rend ce projet unique

### 1. Design éditorial de type magazine

Le site applique les codes des magazines haut de gamme (Kinfolk, Cereal, Vogue Living) :
- Numérotation de chapitres en filigrane
- Markers verticaux `Chapitre XX — [Titre]`
- Grilles asymétriques au lieu de layouts classiques
- Typographie Georgia serif avec italiques soignés

### 2. Animations performantes

- **Zéro dépendance** à GSAP, Framer Motion ou autre lib d'animation
- **CSS 3D natif** : `perspective`, `transform-style`, `translateZ`
- **Tilt 3D fluide** : `requestAnimationFrame` + interpolation linéaire (lerp)
- **60 FPS constants** sur desktop moderne

### 3. Paiement adapté au marché béninois

- Intégration **FedaPay** (solution leader au Bénin)
- Support **Mobile Money** (MTN, Moov) — essentiel car beaucoup de Béninois n'ont pas de compte bancaire
- Fonction de **normalisation des numéros béninois** (ajout du préfixe `01` obligatoire depuis 2024)

### 4. Approche mobile-first radicale

- **Zooms iOS neutralisés** (font-size 16px minimum sur tous les inputs)
- **Safe-area** iPhone X+ gérée (`env(safe-area-inset-*)`)
- **Grille 2 colonnes adaptative** sur la galerie mobile (pas de simple empilement)
- **Reveals CSS purs** — le contenu reste visible même si JavaScript échoue

### 5. Accessibilité intégrée

- `prefers-reduced-motion` respecté partout
- Navigation clavier complète (`Tab`, `Enter`, `Espace`, `Escape`)
- `aria-label`, `aria-modal`, `role="dialog"` sur la lightbox
- Contrastes conformes WCAG AA

---

## 🚀 Installation locale

```bash
# 1. Cloner le repo
git clone https://github.com/[ton-username]/foodhouse.git
cd foodhouse

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev