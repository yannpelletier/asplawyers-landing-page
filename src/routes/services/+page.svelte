<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import ServicesBackgroundImage from '$lib/assets/services-background.jpg';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
	import BuildingIcon from '@lucide/svelte/icons/building';
	import WalletIcon from '@lucide/svelte/icons/wallet';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardTitle, CardHeader, CardContent, CardFooter } from '$lib/components/ui/card';
	import { localizeHref } from '$lib/paraglide/runtime';

	const services = [
		{
			id: m.serviceIncorporationsAndTrustsId(),
			title: m.serviceIncorporationsAndTrusts(),
			description: m.serviceAssetProtectionDescription(),
			icon: BuildingIcon,
			items: [
				m.serviceNewCompanyCreation(),
				m.serviceManagementCompanySetup(),
				m.serviceFamilyTrustAssetProtection()
			],
			buttonLabel: m.ctaBookConsultation()
		},
		{
			id: m.serviceBusinessPurchaseSaleId(),
			title: m.serviceBusinessPurchaseSale(),
			description: m.serviceBusinessPurchaseSaleDescription(),
			icon: BriefcaseIcon,
			items: [
				m.serviceDilligentVerification(),
				m.serviceRedactionAndRevisionOfLetters(),
				m.serviceFiscalOpitmizationOfPurchase(),
				m.serviceFinancingAndIntegration(),
				m.servicePlanificationOfIntergenerationalTransfer()
			],
			buttonLabel: m.ctaBookConsultation()
		},
		{
			id: m.serviceFiscalReorganizationId(),
			title: m.serviceFiscalReorganization(),
			description: m.serviceFiscalOptimizationDescription(),
			icon: FileTextIcon,
			items: [
				m.serviceCorporativeReorganisation(),
				m.serviceDeductionMultiplication(),
				m.serviceFiscalChargeReductionOfSMB(),
				m.serviceAssetProtectionByLegalStructure(),
				m.serviceAdaptedFiscalPlanning(),
				m.serviceSuccessorPlanning()
			],
			buttonLabel: m.ctaBookConsultation()
		},
		{
			id: m.serviceAnnualLegalUpdateId(),
			title: m.serviceAnnualLegalUpdate(),
			description: m.serviceAnnualLegalUpdateDescription(),
			icon: WalletIcon,
			items: [
				m.serviceKeyStockholdersRemuneration(),
				m.serviceAdvancedCompensation(),
				m.serviceAnnualResolutions(),
				m.serviceDividendResolutions()
			],
			buttonLabel: m.ctaBookConsultation()
		}
	];
</script>

<svelte:head>
	<title>{m.servicesTitle()} | {m.firmName()}</title>
</svelte:head>

<section
	class="relative bg-cover bg-center px-4 sm:px-6 lg:px-8"
	style="background-image: url('{ServicesBackgroundImage}');"
>
	<div
		class="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background/100"
	></div>
	<div
		class="relative z-10 container mx-auto flex flex-col items-center justify-center space-y-6 py-64 lg:min-h-[800px]"
	>
		<h1 class="text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
			{m.servicesTitle()}
		</h1>
		<p class="max-w-3xl text-center text-muted-foreground sm:text-lg lg:text-xl">
			{m.servicesDescription()}
		</p>
		<Button
			href="#content"
			variant="default"
			size="lg"
			class="group relative overflow-hidden px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105"
		>
			<span class="relative">{m.servicesTopButton()}</span>
		</Button>
	</div>
</section>

<section class="container mx-auto px-4 sm:px-6 lg:px-8" id="content">
	<div class="grid gap-8 lg:grid-cols-2">
		{#each services as service}
			<Card
				id={service.id}
				class="group relative overflow-hidden border border-border/50 bg-card shadow-lg backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl"
			>
				<div
					class="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-secondary/10 opacity-10 transition-all duration-500 group-hover:opacity-70"
				></div>
				<CardHeader class="flex flex-col pb-4">
					<div class="flex items-center space-x-3">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20"
						>
							<service.icon
								class="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110"
								strokeWidth={2}
							/>
						</div>
						<CardTitle
							class="text-xl font-semibold text-foreground transition-all group-hover:text-primary sm:text-2xl"
						>
							{service.title}
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent class="grow pb-6">
					<p class="mb-4 text-sm text-muted-foreground sm:text-base">
						{service.description}
					</p>
					<div class="mb-4">
						<h3 class="mb-2 text-lg font-medium text-foreground">
							{m.serviceThisServiceIncludes()}
						</h3>
						<ul class="space-y-2 text-sm text-muted-foreground sm:text-base">
							{#each service.items as item}
								<li class="flex items-center space-x-2">
									<span class="h-2 w-2 rounded-full bg-primary"></span>
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				</CardContent>
				<CardFooter class="pt-4">
					<Button
						href={localizeHref('/contact')}
						variant="outline"
						size="lg"
						class="group/button relative w-full overflow-hidden border-primary/50 bg-transparent px-6 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
					>
						<span class="relative">{service.buttonLabel}</span>
					</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>
</section>
