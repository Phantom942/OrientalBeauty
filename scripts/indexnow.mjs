#!/usr/bin/env node
/**
 * Notifie IndexNow (Bing, Yandex, etc.) des URLs du site pour une indexation rapide.
 * À exécuter après chaque déploiement.
 * Usage: SITE_URL=https://www.orientalbeauty.fr node scripts/indexnow.mjs
 */
const SITE = process.env.SITE_URL || 'https://www.orientalbeauty.fr';
const KEY = 'ob94index';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

async function fetchSitemapUrls() {
  const sitemapUrl = `${SITE}/sitemap-0.xml`;
  const res = await fetch(sitemapUrl);
  if (!res.ok) throw new Error(`Sitemap ${sitemapUrl}: ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return urls;
}

async function submitIndexNow(urlList) {
  const body = {
    host: new URL(SITE).hostname,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`IndexNow ${res.status}: ${await res.text()}`);
  }
  return res.status;
}

(async () => {
  try {
    const urls = await fetchSitemapUrls();
    const status = await submitIndexNow(urls);
    console.log(`✓ IndexNow: ${urls.length} URLs soumises (${status})`);
  } catch (err) {
    console.error('✗ IndexNow:', err.message);
    process.exit(1);
  }
})();
