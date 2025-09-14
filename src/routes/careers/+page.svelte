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
		<h1 class="text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
			{m.careersTitle()}
		</h1>
		<p class="text-center text-muted-foreground sm:text-lg lg:text-xl">
			{m.careersDescription()}
		</p>
		<p class="sm:text-md max-w-xl text-center text-muted-foreground lg:text-lg">
			{m.careersSubDescription()}
			<a
				href="mailto:{m.careersEmail()}"
				class="text-sm text-blue-600 hover:underline sm:text-base md:text-lg"
			>
				{m.careersEmail()}
			</a>
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
