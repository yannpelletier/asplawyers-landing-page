import type { ParamMatcher } from '@sveltejs/kit';

export const match = (value: string) => {
	return /^[1-9]\d*$/.test(value);
};
