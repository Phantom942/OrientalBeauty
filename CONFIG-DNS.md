# Configuration DNS — Oriental Beauty

**Domaine** : `www.orientalbeauty.fr`

---

## Modifications à faire chez ton hébergeur DNS

Utilise le fichier **`DNS-GITHUB-PAGES.csv`** comme référence. Voici les changements :

### 1. `www.orientalbeauty.fr` — CNAME

| Avant | Après |
|-------|-------|
| `onstatic-fr.setupdns.net` | `TON_USERNAME.github.io` |

Remplace **TON_USERNAME** par ton pseudo GitHub (ex. si ton repo est `github.com/macousine/epilation`, utilise `macousine`).

### 2. `orientalbeauty.fr` (domaine racine) — enregistrements A

Remplace l’A unique `81.88.57.68` par ces 4 adresses :

| Type | Valeur |
|------|--------|
| A | `185.199.108.153` |
| A | `185.199.109.153` |
| A | `185.199.110.153` |
| A | `185.199.111.153` |

Les autres enregistrements (MX, mail, webmail, smtp, etc.) restent inchangés.

---

## Déjà configuré dans le projet

- `public/CNAME` → `www.orientalbeauty.fr`
- `astro.config.mjs` → `site: 'https://www.orientalbeauty.fr'`

## Prérequis

- Dépôt GitHub avec le projet poussé
- GitHub Pages activé (Settings → Pages → Source : **GitHub Actions**)

---

## 1. Domaine utilisé

Quel domaine veux-tu ? (ex. `www.orientalbeauty.fr` ou `orientalbeauty.fr`)

---

## 2. Sur GitHub

1. Va dans **Settings** du dépôt → **Pages**
2. Dans **Custom domain**, entre ton domaine (ex. `www.orientalbeauty.fr`)
3. Clique **Save**
4. GitHub affichera les enregistrements DNS à configurer

---

## 3. Enregistrements DNS (chez ton registrar)

### Option A : Sous-domaine `www` (recommandé)

| Type  | Nom / Hôte      | Valeur              | TTL  |
|-------|-----------------|---------------------|------|
| CNAME | `www`           | `ton-username.github.io` | 3600 |

Remplace `ton-username` par ton pseudo GitHub.

### Option B : Domaine racine (sans www)

| Type | Nom / Hôte | Valeur | TTL  |
|------|------------|--------|------|
| A    | `@`        | `185.199.108.153`   | 3600 |
| A    | `@`        | `185.199.109.153`   | 3600 |
| A    | `@`        | `185.199.110.153`   | 3600 |
| A    | `@`        | `185.199.111.153`   | 3600 |
| CNAME| `www`      | `ton-username.github.io` | 3600 |

### Option C : Domaine racine + www

Configure les deux (A + CNAME) comme ci-dessus.

---

## 4. Fichier CNAME

Crée le fichier `public/CNAME` contenant uniquement ton domaine :

- Avec www : `www.orientalbeauty.fr`
- Sans www : `orientalbeauty.fr`

Le contenu exact du fichier doit être **une seule ligne** avec le domaine.

---

## 5. Astro config

Dans `astro.config.mjs`, mets à jour :

```js
site: 'https://www.orientalbeauty.fr',  // ou https://orientalbeauty.fr
base: '/',
```

---

## 6. Vérification

- Propagation DNS : 5 minutes à 48 h
- HTTPS : activé automatiquement par GitHub
- Test : ouvre ton domaine dans le navigateur

---

## Résumé par registrar

### OVH / OVHcloud
Zone DNS → Ajouter une entrée → Choisir CNAME ou A selon l’option

### Gandi
Zone DNS → Ajouter un enregistrement

### Cloudflare
DNS → Add record → Type CNAME ou A

### Ionos, Namecheap, etc.
Section « DNS » ou « Gestion des enregistrements »
