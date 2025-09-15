<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import CookieBar from '$lib/components/cookie-bar.svelte';

	import '../app.css';
</script>

<ModeWatcher />
<div class="flex min-h-screen flex-col">
	<Header />
	<main>
		<div style="display: none">
			{#each locales as locale}
				<a href={localizeHref(page.url.pathname, { locale })} aria-label={locale}></a>
			{/each}
		</div>
		<slot />
	</main>
	<Footer />
	<CookieBar />
</div>
