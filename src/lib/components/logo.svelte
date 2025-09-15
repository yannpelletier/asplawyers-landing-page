<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { cn } from '$lib/utils';

	let {
		class: className
	}: {
		class?: string;
	} = $props();
</script>

<a
	href={localizeHref('/')}
	class={cn(
		'border-l-4 border-primary py-1 pl-2 font-leyendo font-bold tracking-widest text-secondary',
		className
	)}
>
	{m.logo()}
</a>
