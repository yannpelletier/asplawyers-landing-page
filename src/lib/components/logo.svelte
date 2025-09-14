<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { i18n } from '$lib/i18n';
	import { cn } from '$lib/utils';

	let {
		class: className
	}: {
		class?: string;
	} = $props();
</script>

<a
	href={i18n.resolveRoute('/')}
	class={cn(
		'border-l-4 border-primary py-1 pl-2 font-leyendo font-bold tracking-widest text-secondary',
		className
	)}
>
	{m.logo()}
</a>
