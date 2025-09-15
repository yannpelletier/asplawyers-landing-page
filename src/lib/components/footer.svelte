<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import Logo from '$lib/components/logo.svelte';

	const generalLinks = [
		{
			label: m.navHome(),
			path: localizeHref('/')
		},
		{
			label: m.navCareers(),
			path: localizeHref('/careers')
		},
		{
			label: m.navAbout(),
			path: localizeHref('/about')
		},
		{
			label: m.navContact(),
			path: localizeHref('/contact')
		}
	];

	const serviceLinks = [
		{
			label: m.serviceIncorporationsAndTrusts(),
			path: localizeHref(`/services#${m.serviceIncorporationsAndTrustsId()}`)
		},
		{
			label: m.serviceBusinessPurchaseSale(),
			path: localizeHref(`/services#${m.serviceBusinessPurchaseSaleId()}`)
		},
		{
			label: m.serviceFiscalReorganization(),
			path: localizeHref(`/services#${m.serviceFiscalReorganizationId()}`)
		},
		{
			label: m.serviceAnnualLegalUpdate(),
			path: localizeHref(`/services#${m.serviceAnnualLegalUpdateId()}`)
		}
	];

	const judiciaryLinks = [
		{
			label: m.footerPrivacyPolicy(),
			path: localizeHref('/privacy-policy')
		}
	];
</script>

{#snippet footerLink({ label, path }: { label: string; path: string })}
	<a
		href={path}
		class="group md:text-md relative inline-block text-sm transition-colors duration-300 hover:text-foreground/75"
	>
		<span class="text-accent-foreground">
			{label}
		</span>
		<span
			class="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-primary transition-transform duration-300 group-hover:scale-x-100"
		></span>
	</a>
{/snippet}

<footer class="mt-auto px-4 pt-10 pb-20">
	<div class="container mx-auto grid gap-12 text-center md:grid-cols-4 md:text-left">
		<div class="flex flex-col gap-4 text-sm">
			<div class="mb-4">
				<Logo class="text-4xl" />
			</div>
			<div>
				<span class="font-bold">{m.footerContactPhone()} :</span>
				<span>{m.firmContactPhone()}</span>
			</div>
			<div>
				<span class="font-bold">{m.footerContactEmail()} :</span>
				<a href="mailto:${m.firmContactEmail()}" class="text-primary hover:underline">
					{m.firmContactEmail()}
				</a>
			</div>
		</div>
		<div>
			<h3 class="pb-4 text-2xl font-medium">{m.footerGeneral()}</h3>
			<ul class="flex flex-col gap-2">
				{#each generalLinks as link}
					<li>{@render footerLink(link)}</li>
				{/each}
			</ul>
		</div>
		<div>
			<h3 class="pb-4 text-2xl font-medium">{m.footerServices()}</h3>
			<ul class="flex flex-col gap-2">
				{#each serviceLinks as link}
					<li>{@render footerLink(link)}</li>
				{/each}
			</ul>
		</div>
		<div>
			<h3 class="pb-4 text-2xl font-medium">{m.footerLegal()}</h3>
			<ul class="flex flex-col gap-2">
				{#each judiciaryLinks as link}
					<li>{@render footerLink(link)}</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
