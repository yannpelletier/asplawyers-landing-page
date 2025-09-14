<script lang="ts">
	import { onMount } from 'svelte';
	import HandshakeIcon from '@lucide/svelte/icons/handshake';
	import SignatureIcon from '@lucide/svelte/icons/signature';
	import BadgeDollarSignIcon from '@lucide/svelte/icons/badge-dollar-sign';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
	import BuildingIcon from '@lucide/svelte/icons/building';
	import WalletIcon from '@lucide/svelte/icons/wallet';
	import * as m from '$lib/paraglide/messages';
	import { i18n } from '$lib/i18n';
	import HeroBackgroundImage1 from '$lib/assets/hero-background.jpg';
	import HeroBackgroundImage2 from '$lib/assets/hero-background2.jpg';
	import HeroBackgroundImage3 from '$lib/assets/hero-background3.jpg';
	import ContactImage from '$lib/assets/contact-background.jpg';
	import QuebecFlagImage from '$lib/assets/quebec-flag.jpg';
	import HandshakeImage from '$lib/assets/handshake.jpg';
	import BusinessPlanningImage from '$lib/assets/business-planning.jpg';
	import LaywerCompanyImage from '$lib/assets/lawyer-company.jpg';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';

	const HERO_SLIDE_DURATION = 5000;

	const customerChallenges = [
		{
			title: m.challengeHighTaxBurden(),
			description: m.challengeHighTaxBurdenDescription(),
			icon: BadgeDollarSignIcon
		},
		{
			title: m.challengeTransactionComplexity(),
			description: m.challengeTransactionComplexityDescription(),
			icon: HandshakeIcon
		},
		{
			title: m.challengeRobustLegalStructures(),
			description: m.challengeAssetProtectionDescription(),
			icon: SignatureIcon
		}
	];

	const offeredServices = [
		{
			title: m.serviceIncorporationsAndTrusts(),
			description: m.serviceAssetProtectionDescription(),
			icon: BuildingIcon,
			path: i18n.resolveRoute('/services#incorporations')
		},
		{
			title: m.serviceBusinessPurchaseSale(),
			description: m.serviceBusinessPurchaseSaleDescription(),
			icon: BriefcaseIcon,
			path: i18n.resolveRoute('/services#purchase')
		},
		{
			title: m.serviceFiscalReorganization(),
			description: m.serviceFiscalOptimizationDescription(),
			icon: FileTextIcon,
			path: i18n.resolveRoute('/services#reorganization')
		},
		{
			title: m.serviceAnnualLegalUpdate(),
			description: m.serviceAnnualLegalUpdateDescription(),
			icon: WalletIcon,
			path: i18n.resolveRoute('/services#update')
		}
	];

	const reasons = [
		{
			title: m.reasonQuebecExpertise(),
			image: QuebecFlagImage
		},
		{
			title: m.reasonAccessibleSmeService(),
			image: HandshakeImage
		},
		{
			title: m.reasonProactiveSavingsApproach(),
			image: BusinessPlanningImage
		},
		{
			title: m.reasonComprehensiveBusinessSupport(),
			image: LaywerCompanyImage
		}
	];

	const heroBackgrouds = [HeroBackgroundImage1, HeroBackgroundImage2, HeroBackgroundImage3];
	let currentHeroBackgroundIndex = $state(0);

	onMount(() => {
		const timeout = setInterval(() => {
			currentHeroBackgroundIndex += 1;
			if (currentHeroBackgroundIndex >= heroBackgrouds.length) {
				currentHeroBackgroundIndex = 0;
			}
		}, HERO_SLIDE_DURATION);

		return () => clearTimeout(timeout);
	});
</script>

<svelte:head>
	<title>{m.firmName()}: {m.firmDescription()}</title>
</svelte:head>

<!-- Hero Section -->
<section
	class="hero-bg-move relative bg-cover"
	style="background-image: url('{heroBackgrouds[currentHeroBackgroundIndex]}');"
>
	<div
		class="absolute inset-0 bg-gradient-to-b from-background/70 via-background/65 via-50% to-background"
	></div>
	<div class="hero-bg-fade absolute inset-0 bg-background"></div>
	<div
		class="relative z-10 container mx-auto flex max-h-screen min-h-screen grid-cols-5 items-center lg:grid lg:min-h-[800px]"
	>
		<div class="p-4 lg:col-span-3 lg:px-16 xl:col-span-2">
			<h1 class="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
				{m.heroOptimizeTaxesAndAssets()}
			</h1>
			<p class="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
				{m.heroFirmSpecialization()}
			</p>
			<Button
				href={i18n.resolveRoute('/contact')}
				variant="default"
				size="lg"
				class="btn-shine mt-6 w-full cursor-pointer p-6 text-base sm:text-lg md:text-xl"
			>
				{m.ctaBookConsultation()}
			</Button>
		</div>
	</div>
</section>

<!-- Problèmes du client -->
<section class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
	<h2
		class="mb-8 text-center text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
	>
		{m.sectionBusinessChallenges()}
	</h2>
	<div class="grid grid-cols-1 gap-6 xl:grid-cols-3">
		{#each customerChallenges as challenge}
			<Card
				class="border-0 bg-gradient-to-br from-card/100 to-card/50 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-80 hover:shadow-xl"
			>
				<div class="flex items-start space-x-4">
					<challenge.icon
						class="size-18 flex-shrink-0 rounded-lg border-2 bg-accent p-2 text-primary"
					/>
					<div class="flex flex-col space-y-2">
						<h2 class="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl">
							{challenge.title}
						</h2>
						<p class="text-sm leading-relaxed sm:text-base md:text-lg">
							{challenge.description}
						</p>
					</div>
				</div>
			</Card>
		{/each}
	</div>
</section>

<!-- Nos Solutions -->
<section class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
	<h2
		class="mb-8 text-center text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
	>
		{m.sectionOurSolutions()}
	</h2>
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
		{#each offeredServices as service}
			<Card
				class="flex flex-col border-0 bg-gradient-to-br from-card/100 to-card/50 shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-80 hover:shadow-xl"
			>
				<CardHeader class="">
					<CardTitle
						class="flex min-h-[3rem] items-center justify-center text-center text-base font-semibold sm:text-lg md:text-xl"
					>
						{service.title}
					</CardTitle>
				</CardHeader>
				<CardContent class="flex flex-grow flex-col items-center space-y-4">
					<service.icon class="size-20 flex-shrink-0 text-primary" />
					<p
						class="md:text-md min-h-[6rem] flex-shrink-0 grow text-sm leading-relaxed sm:text-base"
					>
						{service.description}
					</p>

					<Button
						href={service.path}
						variant="outline"
						class="group/button relative w-full overflow-hidden border-primary/50 bg-transparent px-6 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
					>
						{m.ctaLearnMore()}
					</Button>
				</CardContent>
			</Card>
		{/each}
	</div>
</section>

<!-- Pourquoi ASP Avocats inc.? -->
<section class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
	<div class="text-center">
		<h2
			class="mb-12 text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
		>
			{m.sectionWhyChooseAsp()}
		</h2>
	</div>
	<div class="grid gap-12 md:grid-cols-2 md:gap-12">
		{#each reasons as reason, index}
			<div
				class="group relative flex flex-col items-center text-center lg:flex-row lg:gap-8"
				class:lg:flex-row-reverse={index % 2 !== 0}
				class:lg:text-left={index % 2 !== 0}
				class:lg:text-right={index % 2 === 0}
			>
				<h3
					class="mb-4 text-base font-medium sm:text-lg md:text-xl lg:w-1/2 lg:text-2xl xl:text-3xl"
				>
					{reason.title}
				</h3>
				<Card
					class="relative h-64 w-full transform rounded-lg bg-cover bg-center shadow-lg transition-transform duration-300 group-hover:scale-105 lg:w-1/2"
					style="background-image: url('{reason.image}');"
				/>
				{#if index > 0}
					<Separator class="block lg:hidden" />
				{/if}
			</div>
		{/each}
	</div>
</section>

<!-- CTA Fort -->
<section class="relative bg-cover bg-center" style="background-image: url('{ContactImage}');">
	<div
		class="absolute inset-0 bg-gradient-to-b from-background/100 via-background/75 via-50% to-background/100"
	></div>
	<div
		class="relative z-10 container mx-auto flex max-h-screen min-h-screen w-3/5 flex-col items-center justify-center space-y-4 text-center lg:min-h-[500px]"
	>
		<h2 class="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
			{m.ctaReadyToOptimize()}
		</h2>
		<h2 class="text-base font-medium sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
			{m.ctaContactUs()}
		</h2>
		<Button
			href={i18n.resolveRoute('/contact')}
			variant="default"
			size="lg"
			class="btn-shine m-6 w-76 cursor-pointer p-6 text-base sm:text-lg md:text-xl"
		>
			{m.ctaBookConsultation()}
		</Button>
	</div>
</section>

<style>
	.hero-bg-move {
		animation: backgroundSlide 10s linear infinite; /* Animation properties */
	}

	.hero-bg-fade {
		animation: backgroundFade 5s ease-in-out infinite; /* Animation properties */
	}

	@keyframes backgroundSlide {
		0% {
			background-position: 40% 70%;
		}
		49% {
			background-position: 70% 40%;
		}
		50% {
			background-position: 40% 40%;
		}
		100% {
			background-position: 70% 70%;
		}
	}

	@keyframes backgroundFade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
