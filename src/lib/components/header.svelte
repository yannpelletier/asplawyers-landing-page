<script lang="ts">
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import * as m from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		Collapsible,
		CollapsibleTrigger,
		CollapsibleContent
	} from '$lib/components/ui/collapsible';
	import { HoverCard, HoverCardTrigger, HoverCardContent } from '$lib/components/ui/hover-card';
	import LanguageSelect from '$lib/components/language-select.svelte';
	import ModeToggle from '$lib/components/mode-toggle.svelte';
	import Logo from '$lib/components/logo.svelte';

	type NavItem = {
		label: string;
		path: string;
		subItems?: Array<NavItem>;
	};

	let isDrawerOpen = $state(false);
	let scrollY = $state(0);
	const isScrolled = $derived(scrollY >= 25);

	const navItems: Array<NavItem> = [
		{
			path: localizeHref('/services'),
			label: m.footerServices(),
			subItems: [
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
			]
		},
		{ path: localizeHref('/careers'), label: m.footerCareers() },
		{ path: localizeHref('/about'), label: m.navAbout() }
	];

	const handleScroll = () => {
		scrollY = window.scrollY;
	};

	const toggleDrawer = () => {
		isDrawerOpen = !isDrawerOpen;
	};

	const closeDrawer = () => {
		isDrawerOpen = false;
	};

	onMount(() => {
		scrollY = window.scrollY;
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#snippet contactButton()}
	<Button
		href={localizeHref('/contact')}
		variant="default"
		size="default"
		class="btn-shine cursor-pointer p-6 text-lg"
	>
		{m.ctaBookConsultation()}
	</Button>
{/snippet}

{#snippet headerLink({ label, path, subItems }: NavItem)}
	<!-- Desktop: HoverCard, Mobile: Collapsible -->
	{#if subItems}
		<!-- Mobile Collapsible (visible on lg:hidden) -->
		<div class="lg:hidden">
			<Collapsible>
				<CollapsibleTrigger
					class="text-accent-content group text-md relative inline-block w-full text-left transition-colors duration-300 hover:text-foreground/75 lg:text-lg"
					aria-label="{label} expandable menu"
				>
					<span class="flex items-center space-x-1 text-accent-foreground">
						<div>
							{label}
						</div>
						<ChevronDown />
					</span>
					<span
						class="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-primary transition-transform duration-300 group-hover:scale-x-100"
					></span>
				</CollapsibleTrigger>
				<CollapsibleContent class="mt-2 flex flex-col space-y-2 pl-4">
					{#each subItems as item}
						<a
							href={item.path}
							onclick={closeDrawer}
							class="text-accent-content group relative block inline-block text-sm transition-colors duration-300 hover:text-foreground/75"
						>
							<span class="text-accent-foreground">{item.label}</span>
							<span
								class="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-primary transition-transform duration-300 group-hover:scale-x-100"
							></span>
						</a>
					{/each}
				</CollapsibleContent>
			</Collapsible>
		</div>

		<!-- Desktop HoverCard (hidden on lg:hidden) -->
		<div class="hidden lg:block">
			<HoverCard openDelay={0} closeDelay={150}>
				<HoverCardTrigger>
					<a
						href={path}
						onclick={closeDrawer}
						class="text-accent-content group relative inline-block text-sm transition-colors duration-300 hover:text-foreground/75 md:text-lg"
						role="button"
						aria-haspopup="true"
					>
						<span class="flex items-center space-x-1 text-accent-foreground">
							<div>
								{label}
							</div>
							<ChevronDown />
						</span>
						<span
							class="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-primary transition-transform duration-300 group-hover:scale-x-100"
						></span>
					</a>
				</HoverCardTrigger>
				<HoverCardContent class="flex w-96 flex-col space-y-2" align="start">
					{#each subItems as item}
						<a
							href={item.path}
							onclick={closeDrawer}
							class="text-accent-content group md:text-md relative inline-block w-full text-sm transition-colors duration-300 hover:text-foreground/75"
						>
							<span class="text-accent-foreground">{item.label}</span>
							<span
								class="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-primary transition-transform duration-300 group-hover:scale-x-100"
							></span>
						</a>
					{/each}
				</HoverCardContent>
			</HoverCard>
		</div>
	{:else}
		<a
			href={path}
			onclick={closeDrawer}
			class="text-accent-content group text-md relative inline-block transition-colors duration-300 hover:text-foreground/75 lg:text-lg"
		>
			<span class="text-accent-foreground">{label}</span>
			<span
				class="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-primary transition-transform duration-300 group-hover:scale-x-100"
			></span>
		</a>
	{/if}
{/snippet}

<header
	class="transition-background fixed top-0 right-0 left-0 z-50 px-4 py-8 duration-150"
	class:!bg-card={isScrolled || isDrawerOpen}
	class:!py-4={isScrolled}
>
	<nav class="container mx-auto flex items-center space-x-4 lg:space-x-8">
		<div>
			<Logo class="text-xl md:text-3xl lg:text-4xl" />
		</div>

		<!-- Desktop Menu -->
		<div>
			<ul class="hidden space-x-8 lg:flex">
				{#each navItems as navItem}
					<li>
						{@render headerLink(navItem)}
					</li>
				{/each}
			</ul>
		</div>

		<div class="grow"></div>

		<div class="hidden xl:block">
			{@render contactButton()}
		</div>

		<div>
			<LanguageSelect />
		</div>

		<div class="hidden lg:block">
			<ModeToggle />
		</div>

		<div class="lg:hidden">
			<Button
				variant="ghost"
				class="focus:outline-none"
				onclick={toggleDrawer}
				aria-label="Toggle menu"
			>
				{#if isDrawerOpen}
					<XIcon class="size-8" />
				{:else}
					<MenuIcon class="size-8" />
				{/if}
			</Button>
		</div>
	</nav>

	<!-- Mobile Drawer -->
	{#if isDrawerOpen}
		<div
			class="fixed right-0 left-0 z-40 overflow-hidden bg-card px-8 py-8 lg:hidden"
			transition:blur={{ duration: 150 }}
		>
			<ul class="flex flex-col space-y-4">
				{#each navItems as navItem}
					<li>
						{@render headerLink(navItem)}
					</li>
				{/each}
				<li>
					{@render contactButton()}
				</li>
			</ul>
		</div>
	{/if}
</header>
