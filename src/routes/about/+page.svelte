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
	class="relative bg-cover bg-center px-4 sm:p-6 lg:p-8"
	style="background-image: url('{AboutBackgroundImage}');"
>
	<div
		class="absolute inset-0 bg-gradient-to-b from-background via-background/65 via-50% to-background"
	></div>
	<div
		class="relative z-10 container mx-auto flex flex-col items-center justify-center space-y-6 py-64 lg:min-h-[800px]"
	>
		<h1 class="text-center text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
			{m.aboutTitle()}
		</h1>
		<p class="max-w-3xl text-center text-base text-xl text-foreground/80 lg:text-2xl">
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
		class="relative z-10 container mx-auto flex max-h-screen min-h-screen flex-col items-center justify-center space-y-6 lg:min-h-[800px]"
	>
		<div class="flex flex-col items-center space-x-16 py-12 lg:flex-row">
			<div class="flex max-w-2xl flex-col space-y-4">
				<div class="text-2xl lg:text-5xl">{m.aboutFounderTitle()}</div>
				<div class="text-justify text-xl font-light">
					{m.aboutFounderDescription()}
				</div>
			</div>
			<div class="order-1">
				<img
					src={AntonyPFPImage}
					class="w-128 rounded-full border-6 border-primary drop-shadow-xl drop-shadow-primary"
					alt="founder"
				/>
			</div>
		</div>
	</div>
</section>
