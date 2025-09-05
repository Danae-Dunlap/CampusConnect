export interface Review{
    review_id: string,
    reviewer_id: string,
    storefront_id: string,
    rating: number,
    comment: string,
    created_at: Date,
}

export interface UserProfile{
    user_id: string, 
    username: string,
    email: string,
    is_seller: boolean,
    storefront_id?: string,
    reviews: Review[],
    created_at: Date,
}

export interface Product{
    product_id: string,
    description: string,
    price: number,
    picture: string,
    is_available: Date,
}

export interface Storefront{
    storefront_id: string,
    title: string,
    owner_id: string,
    products: Product[]
    rating: number,
    description: string,
    created_at: Date,
}