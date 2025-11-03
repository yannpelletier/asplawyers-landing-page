import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
    vitePreprocess(),
    mdsvex(mdsvexConfig)
  ],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: "404.html",
      precompress: true,
			strict: true
		}),
    prerender: {
      entries: [
        '/',
        '/a-propos/',
        '/carrieres/',
        '/contact/',
        '/services/',
        '/politique-de-confidentialite/',
        '/blog/',
        '/en/',
        '/en/contact/',
        '/en/about/',
        '/en/services/',
        '/en/privacy-policy/',
        '/en/careers/',
      ]
    }
  }
};

export default config;
