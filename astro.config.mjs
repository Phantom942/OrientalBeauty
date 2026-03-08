// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.orientalbeauty.fr',
  base: '/',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/robots.txt'),
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
});
