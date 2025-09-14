import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '$lib/paraglide/runtime.js';

export const i18n = createI18n(runtime, {
	defaultLanguageTag: 'fr',
	pathnames: {
		'/about': {
			en: '/about',
			fr: '/a-propos'
		},
		'/careers': {
			en: '/careers',
			fr: '/carrieres'
		},
		'/privacy-policy': {
			en: '/privacy-policy',
			fr: '/politique-de-confidentialite'
		}
	}
});
