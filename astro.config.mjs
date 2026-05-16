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
  },
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    db(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
  ],
});
