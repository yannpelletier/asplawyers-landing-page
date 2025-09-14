<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Logo from '$lib/components/logo.svelte';
	import { i18n } from '$lib/i18n';

	const generalLinks = [
		{
			label: m.navHome(),
			path: i18n.resolveRoute('/')
		},
		{
			label: m.navCareers(),
			path: i18n.resolveRoute('/careers')
		},
		{
			label: m.navAbout(),
			path: i18n.resolveRoute('/about')
		},
		{
			label: m.navContact(),
			path: i18n.resolveRoute('/contact')
		}
	];

	const serviceLinks = [
		{
			label: m.serviceIncorporationsAndTrusts(),
			path: i18n.resolveRoute(`/services#${m.serviceIncorporationsAndTrustsId()}`)
		},
		{
			label: m.serviceBusinessPurchaseSale(),
			path: i18n.resolveRoute(`/services#${m.serviceBusinessPurchaseSaleId()}`)
		},
		{
			label: m.serviceFiscalReorganization(),
			path: i18n.resolveRoute(`/services#${m.serviceFiscalReorganizationId()}`)
		},
		{
			label: m.serviceAnnualLegalUpdate(),
			path: i18n.resolveRoute(`/services#${m.serviceAnnualLegalUpdateId()}`)
		}
	];

	const judiciaryLinks = [
		{
			label: m.footerPrivacyPolicy(),
			path: i18n.resolveRoute('/privacy-policy')
		},
		{
			label: m.footerLegalNotices(),
			path: '/'
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
				<span>{m.firmContactEmail()}</span>
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
