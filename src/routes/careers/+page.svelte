<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { Card } from '$lib/components/ui/card';
	import CareerBackgroundImage from '$lib/assets/career-background.jpg';

	const jobOpenings = [];
</script>

<svelte:head>
	<title>{m.careersTitle()} | {m.firmName()}</title>
</svelte:head>

<section
	class="relative bg-cover bg-center p-4 sm:p-6 lg:p-8"
	style="background-image: url('{CareerBackgroundImage}');"
>
	<div
		class="absolute inset-0 bg-gradient-to-b from-background via-background/65 via-50% to-background"
	></div>
	<div
		class="relative z-10 container mx-auto flex min-h-screen flex-col items-center justify-center space-y-6 lg:min-h-[800px]"
	>
		<h1
			class="text-center text-xl font-bold text-foreground sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
		>
			{m.careersTitle()}
		</h1>
		<p class="max-w-5xl text-center text-base text-xl text-foreground/80 lg:text-2xl">
			{m.careersDescription()}
		</p>
		<Card class="w-full max-w-2xl p-4 text-center">
			{#each jobOpenings as opening}{:else}
				<div class="text-sm sm:text-base md:text-lg lg:text-xl">
					{m.careersNoJobListing()}
				</div>
			{/each}
		</Card>
	</div>
</section>
