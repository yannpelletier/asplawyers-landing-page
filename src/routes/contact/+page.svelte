<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import ContactBackgroundImage from '$lib/assets/contact-background.jpg';
	import { Card, CardTitle, CardDescription } from '$lib/components/ui/card';
	import Phone from '@lucide/svelte/icons/phone';
	import Mail from '@lucide/svelte/icons/clock';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Clock from '@lucide/svelte/icons/clock';
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
		<p class="max-w-2xl text-center text-base text-xl text-foreground/80 lg:text-2xl">
			{m.contactDescription()}
		</p>
		<div class="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<Card class="flex flex-col items-center space-y-2 p-6 text-center">
				<Mail class="h-8 w-8 text-primary" />
				<CardTitle class="text-lg font-semibold">
					{m.contactByEmail()}
				</CardTitle>
				<CardDescription class="text-base">
					<a href="mailto:info@aspavocats.ca" class="text-primary hover:underline">
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
			<Card class="flex flex-col items-center space-y-2 p-6 text-center">
				<MapPin class="h-8 w-8 text-primary" />
				<CardTitle class="text-lg font-semibold">
					{m.contactOurOffice()}
				</CardTitle>
				<CardDescription class="text-base">
					{m.firmAddress()}
				</CardDescription>
			</Card>
			<Card class="flex flex-col items-center space-y-2 p-6 text-center">
				<Clock class="h-8 w-8 text-primary" />
				<CardTitle class="text-lg font-semibold">
					{m.contactOfficeHours()}
				</CardTitle>
				<CardDescription class="text-base">
					<div>
						{m.firmOfficeDays()}
					</div>
					<div>
						{m.firmOfficeHours()}
					</div>
				</CardDescription>
			</Card>
		</div>
	</div>
</section>
