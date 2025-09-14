<script lang="ts">
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';
	import * as m from '$lib/paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';

	let showBar = false;

	onMount(() => {
		if (!Cookies.get('cookieConsent')) {
			showBar = true;
		}
	});

	function acceptCookies() {
		Cookies.set('cookieConsent', 'true', { expires: 365 });
		showBar = false;
	}
</script>

{#if showBar}
	<Card
		class="fixed right-0 bottom-0 left-0 z-50 flex items-center justify-center rounded-none px-12 py-4"
	>
		<div class="container flex flex-row">
			<p>
				{m.cookieConsentMessage()}
			</p>
			<Button variant="outline" onclick={acceptCookies} class="cursor-pointer">
				{m.cookieAccept()}
			</Button>
		</div>
	</Card>
{/if}
