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

Composants principaux
Layout.astro — Contient <head> (meta SEO, OG, Twitter Card, FedaPay CDN) + <slot /> + ChatWidget. Contient aussi un <script is:inline> qui force history.scrollRestoration = 'manual' et remet le scroll en haut au refresh.

Experience.astro — Section À propos. Grid éditoriale 2 colonnes (image + contenu). 5 avantages numérotés avec icônes SVG. Animation fall des décorations (feuilles, épices, graines).

Menu.astro — 3 plats (Ceebu Jën, L'Attiéké, Ndolé d'Orfèvre). Grille 3 colonnes égales. Bouton "Commander" + image cliquable → modal client → FedaPay → WhatsApp.

Galerie.astro — 8 œuvres culinaires. Desktop : grille 12 colonnes asymétrique + tilt 3D + lightbox. Mobile : 2 colonnes zigzag + hauteurs réduites.

Reservation.astro — Wizard 3 étapes (Le moment / Coordonnées / Confirmation) avec FedaPay acompte 1500 FCFA + WhatsApp.

ChatWidget.astro — Bouton flottant d'accès rapide WhatsApp.

5. Fonctionnalités implémentées
Section Hero
Statut : ✅ Terminée

Description :
Section de couverture avec titre principal FoodHouse. Sert de premier contact visuel. Aucune numérotation éditoriale (rôle de couverture).

Fichiers concernés :

src/components/Hero.astro

Section Experience (Chapitre 01)
Statut : ✅ Terminée

Description :
Section À propos éditoriale avec grille asymétrique (image 4/5 + contenu). 5 avantages en liste avec icônes circulaires. Décorations organiques (feuilles SVG, épices, graines) avec animation de chute perpétuelle. Révélations au scroll. Chiffre fantôme "01" en filigrane + marker vertical "Chapitre 01 — L'Esprit".

Fichiers concernés :

src/components/Experience.astro

Section Menu (Chapitre 02)
Statut : ✅ Terminée

Description :
3 plats en grille 3 colonnes égales. Images carrées (aspect-ratio 1/1). Chaque plat : index (N°01), catégorie, titre, description, prix (tabular-nums), bouton Commander. Le clic sur l'image déclenche la même action que le bouton Commander. Modal client → validation → FedaPay → redirection WhatsApp avec récap. Filtres de catégorie (Signatures / Héritage). Nav mobile sans scrollbar.

Fichiers concernés :

src/components/Menu.astro

Section Galerie (Chapitre 03)
Statut : ✅ Terminée

Description :
8 œuvres culinaires présentées dans une grille 12 colonnes asymétrique sur desktop avec tilt 3D au survol, halo pointeur, badges numérotés, chips de catégorie, lightbox plein écran. Sur mobile : 2 colonnes avec décalage alterné (zigzag), hauteurs réduites, badges compacts. Grain cinéma, filets bordeaux, chiffre fantôme "03", marker vertical "Chapitre 03 — Le Visuel". Citation finale éditoriale.

Fichiers concernés :

src/components/Galerie.astro

Section Réservation (Chapitre 04)
Statut : ✅ Terminée

Description :
Wizard 3 étapes en carrousel horizontal :

Le moment — Date, heure, couverts (segmented control 6 boutons)

Coordonnées — Nom, téléphone, email

Confirmation — Message optionnel + récap dynamique + paiement

Layout 1 colonne centré (formulaire max 36rem). Infos (adresse, téléphone, horaires, réseaux) en grille 2×2 sous le formulaire. Chiffre fantôme "04", marker vertical "Chapitre 04 — La Table".

Fichiers concernés :

src/components/Reservation.astro

Intégration FedaPay
Statut : ✅ Terminée (mode sandbox)

Description :
Deux points de paiement :

Menu — Paiement complet du plat

Réservation — Acompte fixe de 1500 FCFA

Intégration via CDN https://cdn.fedapay.com/checkout.js?v=1.1.7 dans Layout.astro. Fonction normaliserTelBenin() ajoute le préfixe obligatoire 01 au numéro béninois avant envoi à FedaPay.

Fichiers concernés :

src/layouts/Layout.astro (CDN)

src/components/Menu.astro

src/components/Reservation.astro

Intégration WhatsApp
Statut : ✅ Terminée

Description :
Deux flux :

Menu — Après paiement → WhatsApp avec détails de commande

Réservation — Après acompte → WhatsApp avec détails de réservation

Numéro WhatsApp : +2290196977215 (FoodHouse Porto-Novo)

Format : https://wa.me/2290196977215?text=${encodeURIComponent(rawText)}

Fichiers concernés :

src/components/Menu.astro

src/components/Reservation.astro

Système de numérotation éditoriale
Statut : ✅ Terminée

Description :
Chaque grande section a un numéro de chapitre en filigrane + un marker vertical "Chapitre XX — [Titre]". Système inspiré des magazines haut de gamme (Kinfolk, Cereal, Vogue Living).

Répartition :

Hero → couverture (pas de numéro)

Experience → 01 — L'Esprit

Menu → 02 — La Carte

Galerie → 03 — Le Visuel

Réservation → 04 — La Table

Fichiers concernés :

Tous les composants de section

ChatWidget
Statut : ✅ Terminée

Description :
Widget flottant en bas à droite pour accès direct à WhatsApp.

Fichiers concernés :

src/components/ChatWidget.astro

6. Travail effectué récemment
Dernière étape
Date : 08/10/2026

Travail réalisé :

Mise en place du système de numérotation éditoriale complet (01→04) sur toutes les sections

Refonte complète de la Galerie avec grille 12 colonnes asymétrique

Ajout du tilt 3D au survol dans la Galerie (perspective + lerp fluide)

Ajout de la lightbox avec navigation clavier (ESC) et clic extérieur

Adaptation mobile Galerie : 2 colonnes avec zigzag alterné + hauteurs réduites

Correction du centrage parfait du formulaire Réservation

Correction du scroll restoration au refresh

Correction du zoom iOS automatique (font-size 16px sur inputs)

Correction du fallback reveal (contenu visible même si JS échoue)

Correction du débordement des décorations sur mobile (fix clip-path sur Experience)

Normalisation numéro béninois pour FedaPay (ajout préfixe 01)

Fichiers créés :

Aucun (modifications sur fichiers existants)

Fichiers modifiés :

src/components/Experience.astro (numérotation 01, fix mobile overflow, fix reveal)

src/components/Menu.astro (numérotation 02, fix normalisation tel)

src/components/Galerie.astro (refonte complète 3D + mobile 2 colonnes)

src/components/Reservation.astro (numérotation 04, centrage, wizard)

src/layouts/Layout.astro (scroll restoration)

Fichiers supprimés :

Aucun

Résultat :
Toutes les sections sont fonctionnelles en local et en production. Le responsive mobile fonctionne correctement. Les paiements FedaPay sont opérationnels (mode sandbox). Les commandes/réservations arrivent bien sur WhatsApp.

7. État actuel du projet
Statut global :
🟢 Fonctionnel — Déployé sur Vercel

Ce qui fonctionne actuellement
Site accessible sur https://foodhouse-omega.vercel.app/

Navigation desktop et mobile

Menu avec 3 plats (Ceebu Jën, L'Attiéké, Ndolé d'Orfèvre)

Commande via WhatsApp avec paiement FedaPay (sandbox)

Réservation wizard 3 étapes avec acompte 1500 FCFA

Galerie 3D desktop + grille 2 colonnes zigzag mobile

Lightbox images

Widget chat flottant

Déploiement automatique sur push GitHub

Ce qui ne fonctionne pas encore / reste à faire
FedaPay est en mode sandbox — à passer en production (clé live)

Pas encore référencé sur Google (Search Console à configurer)

Pas de fiche Google Business Profile

Pas de sitemap.xml ni robots.txt

Pas de données structurées Schema.org (Restaurant, Menu)

Pas d'analytics (Vercel Analytics / Plausible / GA4)

8. Problèmes rencontrés
Problème 1 — FedaPay refuse les paiements test
Description :
Les paiements de test étaient systématiquement rejetés avec "Transaction échouée".

Cause :
Depuis la réforme de la numérotation téléphonique béninoise, les numéros doivent avoir le préfixe 01 après l'indicatif 229. Les numéros de test 64000001 et 66000001 doivent être envoyés sous la forme +2290164000001 et +2290166000001.

Solution appliquée :
Fonction normaliserTelBenin() ajoutée dans les scripts Menu et Réservation. Elle :

Nettoie le numéro des caractères non-numériques

Retire l'indicatif 229 s'il est présent

Ajoute le 01 obligatoire si absent

Renvoie +229 + le numéro complet

Statut :
✅ Résolu

Problème 2 — Zoom automatique iOS sur les inputs
Description :
Sur iPhone, taper dans un champ de saisie provoquait un zoom automatique qui cassait la mise en page.

Cause :
iOS Safari zoome automatiquement sur les inputs dont la font-size est inférieure à 16px.

Solution appliquée :
Forcer font-size: 16px sur tous les inputs et textarea en mobile (@media (max-width: 767px)).

Statut :
✅ Résolu

Problème 3 — Refresh renvoyait sur la section Réservation
Description :
À chaque refresh (F5), le navigateur scrollait automatiquement vers la section Réservation au lieu de rester en haut de page.

Cause :
Deux causes cumulées :

Le navigateur restaurait la position de scroll précédente

Le script de la Réservation appelait focus() sur le premier input au chargement, ce qui scrollait vers cet élément

Solution appliquée :

Script dans Layout.astro : history.scrollRestoration = 'manual' + window.scrollTo(0, 0) au load

Retrait du focus() initial dans Reservation.astro (remplacé par une variable initialFocusDone qui ne s'active qu'après interaction utilisateur)

Statut :
✅ Résolu

Problème 4 — Contenu invisible en production (Experience)
Description :
La section Experience s'affichait correctement en local mais restait invisible en production.

Cause :
Le script <script> qui devait révéler les éléments était accidentellement commenté entre <!-- --> dans le fichier.

Solution appliquée :
Retrait des commentaires HTML qui englobaient le <script> et le <style> dupliqué. Ajout d'un fallback robuste qui force l'affichage si l'IntersectionObserver ne fire pas.

Statut :
✅ Résolu

Problème 5 — Décorations débordaient sur la section suivante (mobile)
Description :
Sur mobile, les feuilles et épices en chute perpétuelle dépassaient légèrement le bas de la section Experience.

Cause :
Bug connu de overflow: hidden sur Safari mobile qui ne clippe pas de façon fiable les enfants positionnés en absolute avec un top animé.

Solution appliquée :
Deux correctifs cumulés :

Modification des @keyframes fall : le fade se termine à top: 100% (au lieu de 115%)

Ajout de clip-path: inset(0) et contain: paint sur la section Experience

Statut :
✅ Résolu

Problème 6 — Formulaire Réservation non centré
Description :
Sur desktop, le formulaire était décalé à gauche car dans une colonne de grille partagée avec les infos.

Cause :
Layout en 2 colonnes (1.15fr / 1fr) qui empêchait un centrage parfait.

Solution appliquée :
Passage en layout 1 colonne avec :

Formulaire centré (max-width: 36rem; margin: 0 auto)

Infos en grille 2×2 sous le formulaire

Statut :
✅ Résolu

Problème 7 — Galerie invisible sur mobile
Description :
Les images de la galerie ne s'affichaient pas du tout sur mobile.

Cause :
Cumul de 3 problèmes :

<button> + preserve-3d = bug de rendu sur Safari iOS

animation: ... both laissait le contenu caché si l'animation ne démarrait pas

translateZ() sur caption poussait l'élément hors du plan de clip

Solution appliquée :

Remplacement des <button> par des <div role="button">

Passage à animation: ... forwards avec base opacity: 1

Retrait de translateZ sur mobile

Retrait de perspective sur mobile

Statut :
✅ Résolu

Problème 8 — Galerie non stylée du tout (CSS pas appliqué)
Description :
Après plusieurs itérations, la section galerie apparaissait sans aucun style (texte brut empilé).

Cause :
Conflit de spécificité avec Tailwind v4. Les classes .gal-* étaient écrasées par les styles Tailwind chargés après.

Solution appliquée :
Enveloppement de tout le CSS de la galerie dans @layer galerie + préfixage systématique par #galerie . pour augmenter la spécificité.

Statut :
✅ Résolu

9. Décisions techniques importantes
Décision 1 — Utiliser Astro plutôt qu'un framework SPA
Date : À déterminer

Décision : Utiliser Astro comme framework de build avec des composants .astro

Raison : Site vitrine optimisé SEO et performance, contenu statique majoritaire, JS minimal chargé uniquement quand nécessaire (is:inline)

Impact : Excellent score Lighthouse, temps de chargement très rapide, HTML pré-rendu en SSG

Décision 2 — FedaPay pour les paiements
Date : À déterminer

Décision : Intégrer FedaPay pour les paiements Mobile Money (MTN, Moov) et cartes bancaires

Raison : FedaPay est la solution la plus mature au Bénin, supporte MTN/Moov/Orange, mode sandbox disponible pour tests, widget JS simple à intégrer

Impact : Permet le paiement en ligne sans compte bancaire (Mobile Money), essentiel pour le marché béninois

Décision 3 — WhatsApp plutôt que backend
Date : À déterminer

Décision : Toutes les commandes/réservations transitent par WhatsApp via wa.me/

Raison : Pas besoin de backend, de BDD, d'authentification. Le restaurateur reçoit directement les commandes sur son téléphone, dans un format qu'il connaît déjà.

Impact : Zéro coût d'infrastructure, zéro maintenance. Contrainte : tout est manuel côté restaurateur (à confirmer, ce qui est acceptable pour un petit restaurant).

Décision 4 — Système de numérotation éditoriale
Date : 08/10/2026

Décision : Numéroter les sections comme des chapitres de magazine (01, 02, 03, 04)

Raison : Créer un rythme narratif, positionner le site en tant qu'univers de marque et non simple vitrine, se démarquer visuellement des sites de restaurants concurrents

Impact : Fort effet premium, renforce la perception de qualité et justifie un positionnement tarifaire élevé

Décision 5 — Mobile 2 colonnes zigzag pour la Galerie
Date : 08/10/2026

Décision : Sur mobile, afficher la galerie en 2 colonnes avec décalage alterné (zigzag) au lieu d'une colonne empilée

Raison : Réduire la hauteur de scroll de la section, créer du rythme visuel même en petit écran, se démarquer des galeries classiques

Impact : Section plus courte, plus dynamique, meilleur taux de complétion de lecture

10. Contraintes et règles du projet
Ne jamais remplacer les images sans validation explicite (chemins /images/plats/plat-*.png)

Préserver l'intégrité des paiements FedaPay et de l'envoi WhatsApp

Ne pas utiliser de framework UI JS (React, Vue, Svelte) — rester en Astro + JS vanilla

Utiliser Tailwind v4 pour les classes utilitaires mais du CSS natif pour les composants complexes

Toujours ajouter @layer quand on écrit du CSS custom (pour battre Tailwind v4)

Préfixer les sélecteurs par leur section (#menu ., #galerie ., #reservation .) pour éviter les conflits

Respecter prefers-reduced-motion sur toutes les animations

Toujours tester sur mobile (DevTools 375px minimum) avant de pousser

Numéros de téléphone béninois : toujours utiliser normaliserTelBenin() avant envoi à FedaPay

11. Configuration importante
Ne jamais écrire de mots de passe, clés privées ou secrets directement dans ce fichier.

Variables d'environnement / Configuration
Aucun fichier .env requis actuellement. Les clés sont en dur dans le code (à améliorer pour la production).

Clés utilisées (valeurs non documentées ici)
text
Clé publique FedaPay (sandbox) : pk_sandbox_... (actuellement en dur dans Menu.astro et Reservation.astro)
Clé publique FedaPay (production) : À DÉFINIR (à passer en live avant mise en production réelle)
⚠️ Action requise : Avant le passage en production, remplacer :

pk_sandbox_PvSnrvtHYdCoNXQz-azTyeM8 par la clé live FedaPay

Idéalement, passer à des variables d'environnement Vercel

Services externes utilisés
FedaPay — Paiement (CDN : https://cdn.fedapay.com/checkout.js?v=1.1.7)

WhatsApp — Réception des commandes (wa.me/2290196977215)

Vercel — Hébergement et déploiement continu

GitHub — Versioning

Numéro WhatsApp
+229 01 96 97 72 15 → format international 2290196977215 (pour wa.me/)

URL de production
https://foodhouse-omega.vercel.app/

12. Tests effectués
Test 1 — Responsive mobile
Objectif : Vérifier que toutes les sections sont utilisables sur mobile (375px)

Résultat : Toutes les sections s'affichent correctement. Plus de débordement, plus de zoom iOS, formulaire centré, galerie en 2 colonnes zigzag.

Statut : ✅

Test 2 — Paiement FedaPay sandbox
Objectif : Vérifier que le flux de paiement fonctionne en mode test

Résultat : Avec les bons numéros (0164000001 ou 0166000001), la fenêtre FedaPay s'ouvre, valide le montant, et retourne à la redirection WhatsApp après paiement.

Statut : ✅

Test 3 — Commandes WhatsApp
Objectif : Vérifier que les commandes et réservations arrivent bien sur WhatsApp

Résultat : Les messages sont bien formatés et contiennent toutes les informations nécessaires (nom, téléphone, plat/réservation, prix).

Statut : ✅

Test 4 — Lightbox Galerie
Objectif : Vérifier que la lightbox s'ouvre au clic, se ferme à ESC et au clic extérieur

Résultat : Fonctionne parfaitement sur desktop et mobile.

Statut : ✅

Test 5 — Refresh retour en haut de page
Objectif : Vérifier qu'un refresh renvoie sur la première section

Résultat : Après le fix dans Layout.astro + retrait du focus() initial dans Réservation, le refresh renvoie bien en haut de page.

Statut : ✅

Test 6 — Reveal Experience en production
Objectif : Vérifier que le contenu de la section Experience s'affiche en production

Résultat : Après le retrait des commentaires HTML et l'ajout du fallback, le contenu s'affiche correctement.

Statut : ✅

13. Tâches restantes
Priorité critique 🔴
□ Passer FedaPay en mode production (clé live) avant ouverture commerciale
□ Créer une fiche Google Business Profile pour FoodHouse
□ Soumettre le site à Google Search Console
□ Générer et soumettre un sitemap.xml
□ Créer un robots.txt autorisant l'indexation
Priorité importante 🟠
□ Ajouter des données structurées Schema.org (Restaurant, Menu, FoodEstablishment)
□ Ajouter Google Analytics ou Vercel Analytics
□ Améliorer les meta descriptions par section (si multi-pages plus tard)
□ Vérifier le rendu sur vrais appareils (iPhone, Android)
□ Tester le tunnel complet de paiement FedaPay en live (petit montant)
Améliorations 🟡
□ Améliorer le contraste sur certains textes fins
□ Ajouter des transitions entre les étapes du wizard réservation (progress bar animée)
□ Envisager un système de "vu récemment" ou "populaire" pour le menu
□ Ajouter des avis clients (Google Reviews embed)
□ Ajouter une section "Notre histoire" avec photos de l'équipe
□ Newsletter signup (Mailchimp / Brevo)
Idées futures 🔵
□ Multilangue (français / anglais) pour la clientèle touristique
□ Blog culinaire (recettes, histoire des plats, produits locaux)
□ Programme de fidélité (points, réductions)
□ Click & Collect / réservation de créneaux
□ Système d'avis / notation interne
□ Vidéo hero en background
□ Intégration Google Maps avec itinéraire dynamique
14. Prochaine étape recommandée
La prochaine action à effectuer est :

Configurer Google Search Console + créer la fiche Google Business Profile pour FoodHouse

Pourquoi :

Le site est techniquement parfait et déployé en production, mais il n'apparaît pas encore sur Google. Sans ces deux étapes essentielles, les clients potentiels qui cherchent "restaurant africain Porto-Novo" ou "FoodHouse Bénin" ne trouveront jamais le site. La fiche Google Business Profile est le levier n°1 pour apparaître dans les recherches locales, les résultats Google Maps, et gagner la confiance des clients (photos, avis, horaires).

Étapes concrètes :

Créer un compte Google Search Console

Ajouter le site https://foodhouse-omega.vercel.app/ comme propriété

Vérifier la propriété (via balise HTML dans Layout.astro ou DNS Vercel)

Soumettre l'URL de la page d'accueil pour indexation prioritaire

Créer le fichier public/sitemap.xml (ou utiliser l'intégration Astro @astrojs/sitemap)

Créer le fichier public/robots.txt autorisant Googlebot

Créer la fiche Google Business Profile avec :

Nom : FoodHouse

Adresse : Porto-Novo, Bénin

Téléphone : +229 01 96 97 72 15

Site : https://foodhouse-omega.vercel.app/

Photos (plats + ambiance)

Horaires (Lun-Ven 12h-15h / 19h-23h, Sam 19h-00h, Dim fermé)

Menu (lien vers le site)

15. Historique des modifications
08/10/2026
Action :
Mise en place du système de numérotation éditoriale complet (chapitres 01→04) sur toutes les sections + refonte complète de la section Galerie.

Modifications :

Experience.astro : Ajout chiffre fantôme "01" + marker "Chapitre 01 — L'Esprit", fix overflow mobile via clip-path, fix reveal en production

Menu.astro : Ajout chiffre fantôme "02" + marker "Chapitre 02 — La Carte", fix normalisation numéro béninois pour FedaPay

Galerie.astro : Refonte complète avec grille 12 colonnes asymétrique (desktop), tilt 3D, lightbox, badges numérotés, chips de catégorie, grain cinéma. Sur mobile : 2 colonnes zigzag + hauteurs réduites

Reservation.astro : Numérotation "04" + marker "Chapitre 04 — La Table", passage en layout 1 colonne centré, wizard 3 étapes, retrait du focus initial (fix refresh)

Layout.astro : Script scroll restoration

Résultat :
Toutes les sections sont fonctionnelles et cohérentes visuellement. Le responsive mobile est parfait. Les paiements FedaPay fonctionnent en sandbox. Le site est déployé en production sur Vercel.

Prochaine étape :
Configurer Google Search Console + créer la fiche Google Business Profile pour que le site soit référencé et visible dans les recherches locales.