<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import CookieBar from '$lib/components/cookie-bar.svelte';
	import '../app.css';
</script>

<ParaglideJS {i18n} />

<ModeWatcher />
<div class="flex min-h-screen flex-col">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
	<CookieBar />
</div>

