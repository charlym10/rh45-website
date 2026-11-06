import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rh45.ai',
  integrations: [
    react(),
    sitemap({
      // The Home is English at / and Spanish at /es/; the sitemap links each to the other.
      i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } },
      filter: (page) => !page.includes('404'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
