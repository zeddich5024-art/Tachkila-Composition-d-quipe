# ROADMAP — TACHKILA ⚽

## 1. Présentation du projet

**TACHKILA** est une application web destinée au club amateur **Atlas FC**. Elle permet de gérer l'effectif des joueurs et de préparer une composition d'équipe sur un terrain en formation **4-4-2**.

### Technologies utilisées
- HTML5
- Tailwind CSS
- CSS Grid natif
- JavaScript
- DOM et événements JavaScript
- `localStorage`
- Git et GitHub
- Vercel

## 2. Planification et avancement

### Jour 1 — Lundi 19/10/2026
- Création du dépôt Git et du dépôt GitHub.
- Organisation et planification des tâches.
- Mise en place de la structure HTML de la page.
- Création du header, de l'aside, de la zone du terrain et de la modale.
- Intégration initiale de Tailwind CSS.

### Jour 2 — Mardi 20/10/2026
- Construction du terrain en HTML.
- Mise en page du terrain avec CSS Grid natif : 12 colonnes × 9 lignes.
- Positionnement des cases avec `grid-column` et `grid-row`.
- Mise en place de l'ouverture et de la fermeture de la modale.

### Jour 3 — Mercredi 21/10/2026
- Création du formulaire d'ajout d'un joueur.
- Validation des champs à l'aide d'expressions régulières (regex).
- Affichage des joueurs dans l'aside.
- Utilisation de couleurs différentes selon le poste : GB, DEF, MIL et ATT.
- Premier déploiement du site sur Vercel.

### Jour 4 — Jeudi 22/10/2026
- Mise en place de l'assignation d'un joueur à une position à l'aide d'un `select`.
- Vérification de la compatibilité entre le poste du joueur et la position choisie.
- Vérification qu'une position est libre avant d'y placer un joueur.
- Affichage du numéro et du nom du joueur sur le terrain.
- Différenciation visuelle des joueurs placés.
- Possibilité de remettre un joueur sur le banc.
- Mise à jour des compteurs de l'effectif et des joueurs placés.

### Jour 5 — Vendredi 23/10/2026
- Ajout de la suppression d'un joueur avec confirmation.
- Libération de la position occupée par un joueur supprimé.
- Ajout de la modification d'un joueur dans une modale préremplie.
- Retour du joueur sur le banc lorsque son poste est modifié.

### Jour 6 — Lundi 26/10/2026
- Mise en place de la sauvegarde des données avec `localStorage`.
- Restauration des données après actualisation de la page.
- Adaptation de l'interface aux différents formats d'écran.
- Tests des principales fonctionnalités et des cas d'erreur.
- Travail sur les messages de notification de succès et d'erreur.

### Jour 7 — Mardi 27/10/2026
- Finalisation des messages de notification et vérification de leur disparition après 3 secondes.
- Vérification des fonctionnalités principales.
- Mise à jour du README et de la documentation du projet.
- Vérification du dépôt GitHub et du déploiement Vercel.
- Préparation de la démonstration et de la présentation du code.

**État actuel :** le projet principal est réalisé, sans les fonctionnalités bonus. Je suis actuellement en train de régler les messages de notification avant la livraison finale.

## 3. Structure du projet

La structure ci-dessous est un modèle à adapter aux noms réels des fichiers du dépôt.

```text
TACHKILA/
├── index.html       # Structure de la page et terrain 4-4-2
├── style.css        # Styles personnalisés et règles CSS Grid
├── script.js        # Logique JavaScript et interactions du DOM
├── README.md        # Présentation et instructions du projet
└── ROADMAP.md       # Planification des tâches et suivi du projet
```

> Tailwind CSS est utilisé pour la mise en forme de l'interface. Le terrain est construit avec du HTML et du CSS Grid natif, conformément au brief.

## 4. Fonctionnalités principales

- Ajouter un joueur depuis une modale.
- Modifier les informations d'un joueur.
- Supprimer un joueur après confirmation.
- Valider les champs du formulaire.
- Afficher les joueurs avec une couleur correspondant à leur poste.
- Placer un joueur sur une position compatible et libre.
- Remettre un joueur sur le banc.
- Mettre à jour automatiquement les compteurs.
- Afficher la composition en formation 4-4-2.
- Conserver les données avec `localStorage`.
- Adapter l'interface aux écrans d'ordinateur, de tablette et de mobile.
- Afficher des messages de succès ou d'erreur — **finalisation en cours**.

## 7. Lien du presentation

- **Presentation :** *[ https://canva.link/q23za2pcbhfp72d]* 
## 8. Bilan

Ce projet m'a permis de pratiquer la manipulation du DOM, les événements JavaScript, la validation de formulaires, la création dynamique d'éléments, CSS Grid, Tailwind CSS et la sauvegarde des données dans `localStorage`.

