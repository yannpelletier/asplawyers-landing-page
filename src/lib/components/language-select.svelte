<script lang="ts">
	import GlobeIcon from '@lucide/svelte/icons/globe';
	import { page } from '$app/state';
	import { getLocale, locales, localizeHref } from '$lib/paraglide/runtime';
	import {
		DropdownMenu,
		DropdownMenuItem,
		DropdownMenuContent,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';

	const currentLocale = getLocale();
</script>

<DropdownMenu>
	<DropdownMenuTrigger class="flex cursor-pointer space-x-1 p-1 text-sm uppercase lg:text-lg">
		<GlobeIcon class="size-4 lg:size-6" />
		<div>
			{currentLocale}
		</div>
	</DropdownMenuTrigger>
	<DropdownMenuContent>
		{#each locales as locale}
			<a href={localizeHref(page.url.pathname, { locale })} data-sveltekit-reload>
				<DropdownMenuItem class={`uppercase ${locale === currentLocale ? 'bg-accent' : ''}`}>
					{locale}
				</DropdownMenuItem>
			</a>
		{/each}
	</DropdownMenuContent>
</DropdownMenu>
