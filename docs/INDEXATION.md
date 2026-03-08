# Indexation du site — Oriental Beauty

Guide pour accélérer l'indexation sur les moteurs de recherche.

---

## Déjà en place

- **Sitemap** : `https://www.orientalbeauty.fr/sitemap-index.xml`
- **robots.txt** : Autorise l'exploration et pointe vers le sitemap
- **IndexNow** : À chaque déploiement, Bing et Yandex sont notifiés automatiquement

---

## Google Search Console (à faire une fois)

1. Va sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajoute la propriété : `https://www.orientalbeauty.fr`
3. Vérifie la propriété (méthode recommandée : balise HTML ou fichier)
4. **Soumets le sitemap** : `https://www.orientalbeauty.fr/sitemap-index.xml`
5. **Demande d'indexation** : Pour chaque page importante, utilise « Inspecter l'URL » puis « Demander une indexation »

---

## Bing Webmaster Tools

1. [bing.com/webmasters](https://www.bing.com/webmasters)
2. Ajoute ton site et importe depuis Google Search Console (si déjà configuré) ou vérifie manuellement
3. Soumets le sitemap : `https://www.orientalbeauty.fr/sitemap-index.xml`

---

## Indexation manuelle (si besoin)

Pour forcer une notification IndexNow sans attendre le prochain déploiement :

```bash
SITE_URL=https://www.orientalbeauty.fr node scripts/indexnow.mjs
```
