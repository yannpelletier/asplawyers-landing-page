<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import ContactBackgroundImage from '$lib/assets/contact-background.jpg';
	import { Card, CardTitle, CardDescription } from '$lib/components/ui/card';
	import Phone from '@lucide/svelte/icons/phone';
	import Mail from '@lucide/svelte/icons/clock';
</script>

<svelte:head>
	<title>{m.contactTitle()} | {m.firmName()}</title>
</svelte:head>

<section
	class="relative bg-cover bg-center p-4 sm:p-6 lg:p-8"
	style="background-image: url('{ContactBackgroundImage}');"
>
	<div
		class="absolute inset-0 bg-gradient-to-b from-background/70 via-background/65 via-50% to-background"
	></div>
	<div
		class="relative z-10 container mx-auto flex min-h-screen flex-col items-center justify-start space-y-6 py-64 lg:min-h-[800px]"
	>
		<h1 class="text-center text-5xl font-bold text-foreground md:text-3xl lg:text-4xl">
			{m.contactTitle()}
		</h1>
		<p class="max-w-3xl text-center text-muted-foreground sm:text-lg lg:text-xl">
			{m.contactDescription()}
		</p>
		<div class="grid w-full max-w-3xl grid-cols-1 gap-4 lg:grid-cols-2">
			<Card class="flex flex-col items-center space-y-2 p-6 text-center">
				<Mail class="h-8 w-8 text-primary" />
				<CardTitle class="text-lg font-semibold">
					{m.contactByEmail()}
				</CardTitle>
				<CardDescription class="text-base">
					<a href="mailto:${m.firmContactEmail()}" class="text-primary hover:underline">
						{m.firmContactEmail()}
					</a>
				</CardDescription>
			</Card>
			<Card class="flex flex-col items-center space-y-2 p-6 text-center">
				<Phone class="h-8 w-8 text-primary" />
				<CardTitle class="text-lg font-semibold">
					{m.contactByPhone()}
				</CardTitle>
				<CardDescription class="text-base">
					{m.firmContactPhone()}
				</CardDescription>
			</Card>
		</div>
	</div>
</section>
