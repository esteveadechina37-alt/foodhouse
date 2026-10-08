# Récapitulatif du projet Foodhouse

## 1. Stack technique

- **Framework** : Astro 7, mode `server` (rendu serveur, pas statique)
- **Hébergement** : Vercel, avec adaptateur `@astrojs/vercel`
- **Styles** : Tailwind CSS 4 (via plugin Vite), palette personnalisée noir / vin (bordeaux) / crème
- **Icônes** : lucide-astro + SVG inline faits main
- **IA** : chatbot via l'API Groq (modèle `openai/gpt-oss-120b`, gratuit), clé stockée en variable d'environnement côté Vercel
- **Paiement** : FedaPay (Mobile Money), actuellement en mode Sandbox (test)

## 2. Structure des pages

Une seule page (`index.astro`), composée de 7 sections empilées :

1. **Navbar** — menu de navigation fixe
2. **Hero** — bannière d'accueil avec carrousel 3D de plats et effet parallaxe à la souris
3. **Experience** — section "À propos" avec 5 avantages, image éditoriale et décorations animées (feuilles, épices)
4. **Menu** — présentation de 3 plats avec prix, chacun avec un bouton "Commander" qui ouvre le paiement FedaPay
5. **Galerie** — grille éditoriale de 8 photos en 3D (tilt au survol) avec lightbox au clic
6. **Contact** — formulaire de réservation (nom, téléphone, email, date, heure, couverts) qui demande un acompte FedaPay puis redirige vers WhatsApp
7. **Footer** — coordonnées, navigation, réseaux sociaux

Un **chatbot flottant** (ChatWidget) est présent sur toutes les pages via le Layout, avec mémoire de conversation.

## 3. Fonctionnalités clés déjà en place

- ✅ Design premium sur-mesure (pas de template générique), cohérent sur toute la palette noir/bordeaux/crème
- ✅ Paiement Mobile Money intégré (FedaPay) sur la commande ET la réservation (acompte)
- ✅ Redirection automatique vers WhatsApp après paiement réussi, avec message pré-rempli
- ✅ Chatbot IA gratuit (Groq), qui connaît le menu, les horaires, et comment commander/réserver, avec mémoire de conversation
- ✅ SEO de base : balises meta, Open Graph, Twitter Card, title/description personnalisés
- ✅ Animations soignées (reveal au scroll, parallax, effets 3D au survol)
- ✅ Responsive (desktop / mobile géré avec adaptations spécifiques)

## 4. Ce qui manque ou reste perfectible

- ❌ **Pas de `robots.txt` ni de `sitemap.xml`** — pénalise l'indexation Google
- ❌ **Pas de données structurées (schema.org)** — un restaurant devrait avoir un balisage `Restaurant` / `LocalBusiness` pour apparaître enrichi dans Google (horaires, note, menu)
- ❌ **Image du Hero hébergée sur Unsplash** (image générique, pas une vraie photo du lieu) — à remplacer par de vraies photos pour un client réel
- ⚠️ Réseaux sociaux du Footer pointent vers `#` (liens non fonctionnels) — à corriger avant mise en prod pour un vrai client
- ⚠️ Pas de Google Maps intégré ni de lien direct vers la fiche Google Business du restaurant
- ⚠️ Pas d'avis clients / témoignages affichés (preuve sociale)
- ⚠️ `README.md`, `AGENTS.md`, `CLAUDE.md` sont encore les fichiers par défaut du starter Astro — sans impact sur le site public, mais à nettoyer pour la livraison

## 5. Verdict : est-ce que ce site peut convertir un client ?

**Oui, avec de vraies réserves à connaître.**

Ce qui joue en faveur de la conversion :
- Le visiteur peut agir immédiatement (commander, réserver) sans quitter la page ni attendre une réponse humaine — c'est le point fort numéro un.
- Le paiement intégré supprime la friction et le doute classique ("comment je paie ?").
- Le chatbot répond instantanément aux questions simples, 24h/24, ce qu'un commerçant seul ne peut pas offrir.
- Le design inspire confiance (qualité perçue élevée) — un visiteur associe un site soigné à un établissement sérieux.

Ce qui limite la conversion réelle aujourd'hui :
- **Aucune preuve sociale** (avis, note Google, témoignages) — en 2026, la plupart des clients vérifient les avis avant de réserver un restaurant. Son absence est le frein principal.
- **Pas de référencement local structuré** (schema.org, Maps) — sans ça, le site est invisible dans les recherches Google locales ("restaurant africain Porto-Novo"), même s'il est excellent une fois trouvé.
- Les photos doivent être réelles pour un vrai établissement — des visuels génériques ou des plats qui ne correspondent pas feraient perdre toute crédibilité.

**En résumé** : la mécanique de conversion (UX, paiement, rapidité) est solide et prête. Mais la conversion dépend aussi de deux choses hors du code — la visibilité (SEO local) et la confiance (avis, vraies photos) — qui ne sont pas encore traitées.
