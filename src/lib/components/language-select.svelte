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
	<DropdownMenuTrigger class="text-md flex cursor-pointer space-x-1 p-1 uppercase">
		<GlobeIcon />
		<div>
			{currentLanguageTag}
		</div>
	</DropdownMenuTrigger>
	<DropdownMenuContent>
		{#each availableLanguageTags as lang}
			{i18n.resolveRoute(i18n.route(page.url.pathname), lang)}
			<a
				href={i18n.resolveRoute(i18n.route(page.url.pathname), lang)}
				aria-current={lang === currentLanguageTag ? 'page' : undefined}
			>
				<DropdownMenuItem class={`uppercase ${lang === currentLanguageTag ? 'bg-accent' : ''}`}>
					{lang}
				</DropdownMenuItem>
			</a>
		{/each}
	</DropdownMenuContent>
</DropdownMenu>
