// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import db from '@astrojs/db';
import keystatic from '@keystatic/astro';

// Collect all Keystatic content files so the Vercel serverless
// function includes them at runtime.
/** @param {string} dir @returns {string[]} */
function collectFiles(dir) {
  const entries = readdirSync(dir);
  const files = /** @type {string[]} */ ([]);
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...collectFiles(full));
    } else {
      files.push(relative(process.cwd(), full));
    }
  }
  return files;
}
const contentFiles = collectFiles(join(process.cwd(), 'src/content'));

// https://astro.build/config
export default defineConfig({
  site: 'https://bill-two-alpha.vercel.app',
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
  adapter: vercel({
    includeFiles: contentFiles,
  }),
  integrations: [
    react(),
    db(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
  ],
});
