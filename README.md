# Oriental Beauty — Site Esthétique

Site vitrine pour cabinet d'esthétique : browlift, épilations et soins. Construit avec **Astro** pour un SEO optimal et des performances maximales.

## Prérequis

- Node.js 18+
- npm

## Développement

```bash
npm install
npm run dev
```

Ouvre [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Les fichiers statiques sont générés dans `dist/`.

## Déploiement sur GitHub Pages

### 1. Créer le dépôt GitHub

Pousse le projet sur GitHub et active **GitHub Pages** :
- Settings → Pages → Source : **GitHub Actions**

### 2. Configurer `astro.config.mjs`

Selon ton hébergement :

**Option A — Domaine personnalisé** (ex. `www.toncabinet.fr`)  
```js
site: 'https://www.toncabinet.fr',
base: '/',
```

**Option B — Sous-dossier GitHub** (ex. `username.github.io/epilation`)  
```js
site: 'https://username.github.io',
base: '/epilation/',  // nom du dépôt
```

**Option C — Site utilisateur** (ex. `username.github.io`)  
```js
site: 'https://username.github.io',
base: '/',
```

### 3. Domaine personnalisé

1. Ajoute un fichier `public/CNAME` contenant ton domaine : `www.toncabinet.fr`
2. Configure le DNS chez ton registrar avec les enregistrements GitHub Pages
3. Voir `docs/CONFIG-DNS.md` pour la configuration détaillée (Oriental Beauty)

## Personnalisation

Toutes les informations sont dans **`src/config.ts`** :
- **site** : Nom, slogan, description
- **location** : Ville (Créteil), département, région, coordonnées GPS
- **seo** : Titre, description, mots-clés pour le référencement local
- **links** : Instagram, Calendly
- **contact** : Téléphone, email, adresse complète

Complétez `contact.address` avec l'adresse exacte du cabinet pour le SEO local.

**Avant / Après** : Les images sont dans `public/images/avant-apres/` (format WEBP). Pour reconvertir : place tes PNG dans `public/images/`, puis `npm run images:webp`.

### Avant mise en ligne

- **Calendly** : Remplacer `links.calendly` par l’URL réelle dans `src/config.ts`
- **Contact** : Compléter adresse, téléphone, email dans `src/config.ts`
- **Domaine** : Modifier `site` dans `astro.config.mjs`
- **Open Graph** : image par défaut déjà en place dans `public/og-image.png` (remplaçable)

## Structure

```
src/
├── components/     # Header, Hero, Services, etc.
├── layouts/        # Layout principal
├── pages/          # index.astro
└── styles/         # CSS global
```
