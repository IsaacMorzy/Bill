import { makeHandler } from '@keystatic/astro/api';
import config from '../../../../keystatic.config';

export const all = makeHandler({ config });

// For compatibility with some environments that might look for uppercase ALL
export const ALL = all;

export const prerender = false;
