<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import AboutBackgroundImage from '$lib/assets/about-background.jpg';
	import AntonyPFPImage from '$lib/assets/antony-pfp.jpg';
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>{m.aboutTitle()} | {m.firmName()}</title>
</svelte:head>

<section
	class="relative bg-cover bg-center px-4 sm:px-6 lg:px-8"
	style="background-image: url('{AboutBackgroundImage}');"
>
	<div
		class="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background/100"
	></div>
	<div
		class="relative z-10 container mx-auto flex flex-col items-center justify-center space-y-6 py-64 lg:min-h-[800px]"
	>
		<h1 class="text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
			{m.aboutTitle()}
		</h1>
		<p class="max-w-3xl text-center text-muted-foreground sm:text-lg lg:text-xl">
			{m.aboutDescription()}
		</p>
		<Button
			href="#fondateur"
			variant="default"
			size="default"
			class="btn-shine cursor-pointer p-6 text-lg"
		>
			{m.aboutTopButton()}
		</Button>
	</div>
</section>

<section class="relative p-4 sm:p-6 lg:p-8" id="fondateur">
	<div
		class="relative z-10 container mx-auto flex min-h-screen flex-col items-center justify-center space-y-6 lg:min-h-[800px]"
	>
		<div class="flex flex-col items-center gap-16 py-12 lg:flex-row">
			<div class="order-2 flex max-w-2xl flex-col space-y-4 lg:order-1">
				<div class="text-2xl lg:text-5xl">{m.aboutFounderTitle()}</div>
				<div class="text-justify text-xl font-light">
					{m.aboutFounderDescription()}
				</div>
			</div>
			<div class="order-1 lg:order-2">
				<img
					src={AntonyPFPImage}
					class="w-128 rounded-full border-6 border-primary drop-shadow-xl drop-shadow-primary"
					alt="founder"
				/>
			</div>
		</div>
	</div>
</section>
