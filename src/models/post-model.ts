export interface PostModel {
    articles: Array<PostItemModel>
}

export interface PostItemModel {
    slug: string,
    title: string,
    description: string,
    updatedAt: string,
    favoritesCount: number,
    author: AuthorModel
}

export interface AuthorModel {
    username: string,
    image: string   
}