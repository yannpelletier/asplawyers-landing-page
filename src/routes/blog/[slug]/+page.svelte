<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';

	import type { PageData } from './$types';

	const {
		data
	}: {
		data: PageData;
	} = $props();

	const currentLocale = getLocale();
</script>

<div class="container mx-auto min-h-screen bg-background px-4 py-36 sm:px-6 lg:px-8">
	<article class="mx-auto prose prose-lg max-w-3xl text-foreground prose-themed">
		<header class="mb-12 border-b border-border pb-6">
			<h1 class="mb-4 text-4xl font-bold sm:text-5xl">
				{data.post.title}
			</h1>
			{#if data.post.date}
				<p class="mt-2 text-lg font-semibold text-muted-foreground">
					{m.blogPublishedOn()}
					{new Date(data.post.date).toLocaleDateString(currentLocale, {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</p>
			{/if}
			{#if data.post.thumbnail}
				<img src={data.post.thumbnail} class="w-full" />
			{/if}
			{#if data.post.description}
				<p class="mt-2 text-base text-muted-foreground">
					{data.post.description}
				</p>
			{/if}
		</header>
		<div class="prose prose-lg text-foreground prose-themed">
			<data.component />
		</div>
	</article>
</div>
