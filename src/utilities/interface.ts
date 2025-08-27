export interface Review{
    review_id: number,
    reviewer_id: number,
    storefront_id: number,
    rating: number,
    comment: string,
    created_at: Date,
}

export interface UserProfile{
    user_id: number, 
    username: string,
    email: string,
    is_seller: boolean,
    storefront_id?: number,
    reviews: number[],
    created_at: Date,
}

export interface Product{
    product_id: number,
    description: string,
    price: number,
    picture: string, //figure this out
    is_available: Date,
}

export interface Storefront{
    storefront_id: number,
    owner_id: number,
    products: Product[]
    rating: number,
    description: string,
    created_at: Date,
}