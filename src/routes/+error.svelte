<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import CircleXIcon from '@lucide/svelte/icons/circle-x';
	import { Button } from '$lib/components/ui/button/index.js'; // Adjust path if your shadcn-svelte components are installed differently
</script>

<svelte:head>
	<title>{m.error()} | {m.firmName()}</title>
</svelte:head>

<div
	class="flex min-h-[80vh] flex-col items-center justify-center bg-background p-8 text-foreground"
>
	<div class="w-full max-w-md space-y-6 text-center">
		<!-- Icon -->
		<div class="flex justify-center">
			<CircleXIcon class="h-12 w-12 text-destructive" />
		</div>

		<!-- Title -->
		<div class="space-y-2">
			<h1 class="text-3xl font-bold tracking-tight">{m.pageNotFound()}</h1>
			<p class="text-muted-foreground">
				{m.pageNotFoundDescription()}
			</p>
		</div>

		<!-- Action -->
		<div class="pt-4">
			<Button href="/" class="w-full sm:w-auto">Go Home</Button>
		</div>
	</div>
</div>
