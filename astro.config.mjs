// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import db from '@astrojs/db';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://bill.vercel.app',
  prefetch: true,
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/')
            ) {
              return 'react';
            }
            if (
              id.includes('node_modules/@keystatic/core/') ||
              id.includes('node_modules/@keystatic/astro/')
            ) {
              return 'keystatic';
            }
            if (id.includes('node_modules/@markdoc/markdoc/')) {
              return 'markdoc';
            }
          },
        },
      },
      // Keystatic admin SPA (keystatic-page chunk) is ~2.6 MB — normal
      // for a CMS rich text editor. Only loads on /keystatic route.
      chunkSizeWarningLimit: 3000,
    },
  },
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    db(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
  ],
});
