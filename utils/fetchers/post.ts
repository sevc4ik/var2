import api from "../api"
import { TComment, TCreatePostProps, TPatchPostProps, TPost } from "./types"

export const getPosts = () => api.get<TPost[]>('posts').then(({data}) => data)
export const getPostsComments = (id: number) => api.get<TComment[]>(`posts/${id}/comments`).then(({data}) => data)
export const getPostById = (id: undefined | string) => api.get<TPost>(`posts/${id}`).then(({data}) => data)
export const createPost = (params: TCreatePostProps) => api.post<TPost>('posts', params).then(({data}) => data)
export const patchPost = (params: TPatchPostProps, id: undefined | string) => api.patch<TPost>(`posts/${id}`, params).then(({data}) => data)