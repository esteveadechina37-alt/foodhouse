# PROJECT CONTEXT

## 1. Informations générales

- Nom du projet : **FoodHouse**
- Description : Site web vitrine premium pour un restaurant africain gastronomique à Porto-Novo (Bénin). Design éditorial haut de gamme avec commande et réservation en ligne intégrées.
- Objectif principal : Créer une présence web premium qui convertit les visiteurs en clients (commandes directes + réservations), contourne les commissions des plateformes tierces (TheFork, UberEats), et installe une marque forte auprès d'une clientèle locale et internationale.
- Client / utilisateur cible : Restaurant FoodHouse (Porto-Novo, Bénin) — cuisine africaine gastronomique. Public cible : habitants de Porto-Novo/Cotonou, diaspora, touristes.
- Statut actuel : 🟢 Fonctionnel — déployé en production sur Vercel
- Date de début : À déterminer
- Dernière mise à jour : 08/10/2026

---

## 2. Vision et objectifs

### Objectif principal

Créer un site web premium pour FoodHouse qui :
1. Positionne le restaurant comme une adresse gastronomique de référence à Porto-Novo
2. Permet la commande directe sans passer par des plateformes tierces
3. Permet la réservation avec acompte payé en ligne
4. Raconte une histoire éditoriale en 4 chapitres (magazine style)

### Objectifs secondaires

- Optimiser le taux de conversion visiteurs → réservations
- Réduire la dépendance aux plateformes commissionnées
- Créer un asset marketing partageable (réseaux sociaux, WhatsApp)
- Optimiser pour le SEO local ("restaurant africain Porto-Novo")
- Offrir une expérience mobile premium (majorité du trafic)

### Fonctionnalités prévues

- [x] Section Hero / couverture
- [x] Section À propos / Experience (Chapitre 01)
- [x] Section Menu avec commande WhatsApp + FedaPay (Chapitre 02)
- [x] Section Galerie 3D avec lightbox (Chapitre 03)
- [x] Section Réservation wizard 3 étapes (Chapitre 04)
- [x] ChatWidget flottant
- [x] Déploiement Vercel
- [ ] Fiche Google Business Profile (à créer)
- [ ] Soumission Google Search Console + sitemap
- [ ] Optimisation SEO on-page (meta, structured data)
- [ ] Analytics (Vercel Analytics ou Plausible)

---

## 3. Stack technique

### Frontend
- **Astro** v7.0.8 (framework de build)
- **Tailwind CSS** v4
- **TypeScript** (via Astro)
- **CSS natif** (Grid, Flexbox, transforms 3D, animations)
- **JavaScript vanilla** (is:inline dans Astro, pas de framework UI)

### Backend
- Aucun backend propre (site statique Astro)
- Serverless via Vercel pour le déploiement

### Base de données
- Aucune (pas de BDD)

### API / Services externes
- **FedaPay** (paiement Mobile Money + carte bancaire au Bénin)
- **WhatsApp** (via `wa.me/` pour recevoir les commandes/réservations)

### Outils
- **Git** + **GitHub** (versioning)
- **VS Code** (édition)
- **npm** (gestion des dépendances)

### Hébergement / Déploiement
- **Vercel** (URL : https://foodhouse-omega.vercel.app/)
- Déploiement automatique sur push GitHub

---

## 4. Architecture du projet

Site Astro statique avec composants `.astro` par section. Chaque composant contient son HTML, son CSS (`<style is:global>`) et son JS (`<script is:inline>`).

### Structure des fichiers importante

```text
foodhouse/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── plats/
│           ├── plat-4.png à plat-13.png  (utilisées dans Experience + Galerie)
│           ├── plat-5.png à plat-7.png   (utilisées dans Menu)
│           └── image_56b6d48b.jpg        (OG image pour réseaux sociaux)
├── src/
│   ├── components/
│   │   ├── Hero.astro                    (Chapitre — couverture, sans numéro)
│   │   ├── Experience.astro              (Chapitre 01 — L'Esprit)
│   │   ├── Menu.astro                    (Chapitre 02 — La Carte)
│   │   ├── Galerie.astro                 (Chapitre 03 — Le Visuel)
│   │   ├── Reservation.astro             (Chapitre 04 — La Table)
│   │   └── ChatWidget.astro              (Widget flottant)
│   ├── layouts/
│   │   └── Layout.astro                  (Layout global : head, meta OG, FedaPay CDN)
│   ├── pages/
│   │   └── index.astro                   (Page unique qui assemble tout)
│   └── styles/
│       └── global.css                    (Tailwind + variables globales)
├── PROJECT_CONTEXT.md                    (Ce fichier)
├── astro.config.mjs
├── package.json
└── tsconfig.json