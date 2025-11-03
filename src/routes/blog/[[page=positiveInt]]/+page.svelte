<script lang="ts">
	import { fade } from 'svelte/transition';
	import Calendar from '@lucide/svelte/icons/calendar';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevrons-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevrons-right';
	import { goto } from '$app/navigation';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import {
		Card,
		CardTitle,
		CardContent,
		CardDescription,
		CardHeader
	} from '$lib/components/ui/card';
	import {
		Pagination,
		PaginationContent,
		PaginationItem,
		PaginationLink,
		PaginationNextButton,
		PaginationPrevButton,
		PaginationEllipsis
	} from '$lib/components/ui/pagination';

	import type { PageServerData } from './$types';

	export const {
		data
	}: {
		data: PageServerData;
	} = $props();

	const currentLocale = getLocale();
	const paginatedPosts = data.posts.slice(
		(data.page - 1) * data.postsPerPage,
		data.page * data.postsPerPage
	);

	const onPageChange = (newPage: number) => {
		window.location.href = localizeHref(`/blog/${newPage}`);
	};
</script>

<div class="container mx-auto flex min-h-screen flex-col items-center px-4 py-16 md:py-24 lg:py-32">
	<div class="flex w-full max-w-5xl flex-col gap-6">
		<!-- Page Header -->
		{#if data.page === 1}
			<div class="mb-8 text-center">
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Our Blog</h1>
				<p class="mt-2 text-lg text-gray-600">Explore our latest articles and insights</p>
			</div>
		{/if}
		<!-- Blog Posts Grid -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each paginatedPosts as post, index}
				<a
					href={`/blog/${post.slug}`}
					class="group"
					in:fade={{ delay: index * 100, duration: 300 }}
				>
					<Card
						class="h-full w-full transform overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
					>
						<!-- Thumbnail -->
						{#if post.thumbnail}
							<div class="relative aspect-[16/9] overflow-hidden">
								<img
									src={post.thumbnail}
									alt={`${post.title} thumbnail`}
									class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
						{/if}

						<CardHeader class="space-y-3">
							<!-- Title -->
							<CardTitle class="text-xl font-semibold text-primary transition-colors">
								{post.title}
							</CardTitle>

							<!-- Description -->
							{#if post.description}
								<CardDescription class="line-clamp-2 text-gray-600">
									{post.description}
								</CardDescription>
							{/if}
						</CardHeader>
						<CardContent>
							<!-- Meta Information -->
							<div class="flex items-center gap-2 text-sm text-gray-500">
								<Calendar class="h-4 w-4" />
								<span>
									{new Date(post.date).toLocaleDateString(currentLocale, {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</span>
							</div>
						</CardContent>
					</Card>
				</a>
			{:else}
				<div class="col-span-full rounded-lg py-12 text-center" in:fade={{ duration: 300 }}>
					<p class="text-lg">No posts found.</p>
				</div>
			{/each}
		</div>
		<div>
			<Pagination
				page={data.page}
				count={data.posts.length}
				perPage={data.postsPerPage}
				{onPageChange}
			>
				{#snippet children({ pages, currentPage })}
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevButton>
								<ChevronLeftIcon class="size-4" />
								<span class="hidden sm:block">Previous</span>
							</PaginationPrevButton>
						</PaginationItem>
						{#each pages as page (page.key)}
							{#if page.type === 'ellipsis'}
								<PaginationItem>
									<PaginationEllipsis />
								</PaginationItem>
							{:else}
								<PaginationItem>
									<PaginationLink {page} isActive={currentPage === page.value}>
										{page.value}
									</PaginationLink>
								</PaginationItem>
							{/if}
						{/each}
						<PaginationItem>
							<PaginationNextButton>
								<span class="hidden sm:block">Next</span>
								<ChevronRightIcon class="size-4" />
							</PaginationNextButton>
						</PaginationItem>
					</PaginationContent>
				{/snippet}
			</Pagination>
		</div>
	</div>
</div>
