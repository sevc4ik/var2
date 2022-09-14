export type TPost = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export type TComment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export type TCreatePostProps = {
    title: string,
    body: string,
    userId: number
}

export type TPatchPostProps = {
    title: string,
}

export type THeader = {
  clinicName: string,
  imageLink: string,
}