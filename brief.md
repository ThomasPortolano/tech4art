# PRD — Landing page éditoriale SEO (Odyssée)

## Contexte
Odyssée fait face à un cold start sur les stores : faible visibilité organique et trafic initial limité.

L’objectif est de construire un actif d’acquisition durable qui capte des visiteurs à forte intention (personnes en train de planifier une visite du Louvre), sans générer d’overhead opérationnel.

Ce projet ne remplace pas l’ASO dans les stores et ne vise pas à devenir un site vitrine complet. C’est une landing page éditoriale orientée recherche, conçue pour soutenir une croissance long terme et des signaux indirects d’ASO.

## Objectifs
- Capter l’intention bas de funnel (ex. “audioguide louvre”, “louvre audio guide”)
- Expliquer clairement la différence Odyssée vs audioguides classiques
- Envoyer un trafic qualifié vers Google Play (Android uniquement pour l’instant)
- Construire un asset “once built, durable” (maintenance minimale)
- Poser une base pour une extension SEO ultérieure (optionnel)

## Non-objectifs
- Résoudre le cold start immédiatement
- Construire un blog SEO / usine à contenu (pour l’instant)
- Remplacer le site du Louvre (infos pratiques, horaires, etc.)
- Construire une web app (ex. React/SPA)
- Impliquer une animation quotidienne (community/social)

## Scope (Phase 1)
- 1 page canonique par langue
- Langues : Français + Anglais (puis ajout possible de langues via validation AI)
- Hébergement : sous le domaine existant tech4art.info
- 2 URLs recommandées :
  - /en/louvre-audioguide
  - /fr/audioguide-louvre

## Principes éditoriaux
- Écrit pour les visiteurs du musée, pas pour les algorithmes
- Le problème (Louvre immense, surcharge, frustration) est le point de départ
- Odyssée est présenté comme une solution concrète et utile (pas comme un slogan)
- Ton : pas de langage startup générique
- Ne pas réutiliser du copy App/Play Store

## User Story
As a Louvre visitor planning my visit, I want to understand how Odyssée helps me explore the museum at my own pace, so that I can confidently install the right audio guide before (or during) my visit.

## Acceptance Criteria
- Les pages FR et EN sont crawlables et indexables : contenu principal rendu en HTML sans dépendre du JS, statut 200, canonical défini, absence de noindex involontaire.
- Les pages exposent des hreflang corrects et cohérents (FR ↔ EN), avec des chemins de langue explicites (/fr/, /en/).
- Chaque page adresse une intention de recherche principale (FR et EN peuvent différer) et évite la cannibalisation via canonical/hreflang.
- Un visiteur peut accéder à la fiche Google Play depuis la page en 1–2 actions, et les clics vers Google Play sont mesurables.
- L’expérience reste lisible et fonctionnelle en cas d’échec du JS (le texte et le lien vers Google Play restent accessibles).
- Le contenu n’introduit pas d’obligation de maintenance continue : pas d’informations opérationnelles sensibles au temps (horaires, tarifs, accès), ou alors renvoi explicite vers des sources officielles.
- Les visuels utilisés (app, œuvres, photos) affichent les crédits requis et respectent les contraintes de marque/droits.

## Exigences fonctionnelles
- Une landing page éditoriale par langue, accessible via URL stable
- Liens vers Google Play adaptés à Android
- Contenu localisé (pas une traduction littérale) : validation initiale FR/EN par le PO, puis langues additionnelles via AI (tolérance à l’imprécision)

## Exigences SEO & i18n
- Pages statiques ou rendues serveur (HTML pré-rendu), sans rendu client obligatoire
- Chemins de langue explicites (/en/, /fr/)
- hreflang : alternates entre versions linguistiques
- Un intent primaire par page (variantes gérées dans le contenu, pas via duplication de pages)

## Exigences techniques (stack)
- Objectif : site “clean”, très performant, minimal en JS, sans framework de web app (pas de React/SPA)
- CSS : Pico.css pour une cohérence visuelle avec un style par défaut robuste
- Overrides CSS limités (tokens/variables + quelques classes) pour garder la maintenance faible
- JS autorisé uniquement pour du dynamisme non-bloquant (progressive enhancement)
- Le chargement du contenu principal ne doit pas dépendre de JS

## Mesure & tracking (minimum viable)
- Mesurer au minimum : page views, clics vers Google Play (avec paramètres de campagne)
- Les paramètres (ex. UTM) ne doivent pas casser le SEO (pas de pages dupliquées indexées)

## Contraintes légales & marque
- Mention/usage “Louvre” : usage éditorial, sans prétendre être le site officiel
- Crédits obligatoires sur les images/visuels (œuvres, photos, captures)

## Design Requirements
- Lien Figma : à ajouter (source de vérité des layouts et composants)
- Spécifier : structure des sections éditoriales, composants réutilisables (ex. blocs de preuve, FAQ, encadrés), et états (chargement d’images, contenu long/court, responsive)
- Spécifier : interactions attendues (ancres, CTA vers Google Play, comportement des liens externes)

## Critères de succès (phases)
Court terme :
- Pages correctement indexées
- Apparition d’impressions dans la Search Console
- Temps passé élevé (proxy d’intention)

Moyen terme :
- Trafic qualifié vers Google Play
- Meilleure qualité d’install (engagement, rétention)
- Premiers avis/retours

Long terme :
- Base pour extension SEO
- Moins de dépendance à la distribution manuelle
- Crédibilité renforcée hors stores
