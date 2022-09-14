export const HOMEPAGE_URL = '/';
export const POSTPAGE_URL = '/posts'
export const CREATE_POST_PAGE_URL = '/post/create'

export const getPostpageUrl = (id = ':id') => `${POSTPAGE_URL}/${id}`;
export const getPatchPostPageUrl = (id = ':id') => `${POSTPAGE_URL}/${id}/patch`;
