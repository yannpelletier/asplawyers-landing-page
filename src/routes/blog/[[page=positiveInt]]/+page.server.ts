import { posts, POSTS_PER_PAGE } from '$lib/server/posts';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { page: pageParam } = params;
	const page = pageParam ? parseInt(pageParam) : 1;

	return {
		posts,
		page,
		postsPerPage: POSTS_PER_PAGE
	};
};
