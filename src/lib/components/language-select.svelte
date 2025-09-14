<script lang="ts">
	import GlobeIcon from '@lucide/svelte/icons/globe';
	import { page } from '$app/state';
	import { i18n } from '$lib/i18n';
	import { languageTag, onSetLanguageTag, availableLanguageTags } from '$lib/paraglide/runtime';
	import {
		DropdownMenu,
		DropdownMenuItem,
		DropdownMenuContent,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';

	let currentLanguageTag = $state(languageTag());

	onSetLanguageTag((lang) => {
		currentLanguageTag = lang;
		location.reload();
	});
</script>

<DropdownMenu>
	<DropdownMenuTrigger class="flex cursor-pointer space-x-1 p-1 text-sm uppercase lg:text-lg">
		<GlobeIcon class="size-4 lg:size-6" />
		<div>
			{currentLanguageTag}
		</div>
	</DropdownMenuTrigger>
	<DropdownMenuContent>
		{#each availableLanguageTags as lang}
			<a
				href={i18n.resolveRoute(i18n.route(page.url.pathname), lang)}
				hreflang={lang}
				aria-current={lang === currentLanguageTag ? 'page' : undefined}
			>
				<DropdownMenuItem class={`uppercase ${lang === currentLanguageTag ? 'bg-accent' : ''}`}>
					{lang}
				</DropdownMenuItem>
			</a>
		{/each}
	</DropdownMenuContent>
</DropdownMenu>
