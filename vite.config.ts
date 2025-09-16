import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/',
					localized: [
						['en', '/en/'],
						['fr', '/']
					]
				},
				{
					pattern: '/contact',
					localized: [
						['en', '/en/contact/'],
						['fr', '/contact/']
					]
				},
				{
					pattern: '/about',
					localized: [
						['en', '/en/about/'],
						['fr', '/a-propos/']
					]
				},
				{
					pattern: '/services',
					localized: [
						['en', '/en/services/'],
						['fr', '/services/']
					]
				},
				{
					pattern: '/privacy-policy',
					localized: [
						['en', '/en/privacy-policy/'],
						['fr', '/politique-de-confidentialite/']
					]
				},
				{
					pattern: '/careers',
					localized: [
						['en', '/en/careers/'],
						['fr', '/carrieres/']
					]
				}
			]
		}),
		tailwindcss(),
		sveltekit()
	]
});
