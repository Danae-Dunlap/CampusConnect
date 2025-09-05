"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import type {UserProfile, Storefront, Review, Product} from './interface';

const client = generateClient<Schema>()
const now = new Date();
const uuidv4 = require('uuid'); 

export async function createUserProfile(user: UserProfile){
    const promise = client.models.User.create({
        user_id: generateId(), 
        username: user.username,
        email: user.email,
        is_seller: false,
        storefront_id: generateId(),
        reviews: [],
        created_at: now.getTime(),
        }); 

    try{
        await promise;
    }catch(error: unknown){
        console.log("Error creating User Profile: ", error);
    }
    
}

export  async function createStorefront(store: Storefront){
    const promise = client.models.Storefront.create({
        storefront_id: generateId(), 
        storefront_title: store.title,
        owner_id: store.owner_id,
        products: [],
        ratings: -1,
        description: store.description,
        created_at: now.getTime(),
    });

    try{
        await promise;
    }catch(error: unknown){
        console.log("Error creating user storefront: ", error);
    }
}

export async function createUserReview(review: Review){
    const promise = client.models.Review.create({
        review_id: generateId(),
        reviewer_id: review.reviewer_id,
        storefront_id: review.storefront_id,
        rating: review.rating,
        comment: review.comment,
        created_at: now.getTime(),
    });

    try{
        await promise; 
    }catch(error: unknown){
        console.log("Error creating user error: ", error);
    }
}


export async function getUserProfile(username: string): Promise<UserProfile | undefined>{
    try{
        const promise = client.queries.fetchUser({username}); 
        const user = (await promise).data; 
        return {
            user_id: user?.user_id || '',
            username: user?.username || '', 
            email: user?.email || '',
            is_seller: user?.is_seller || false,
            storefront_id: user?.storefront_id ? await getStorefront(user.storefront_id) : undefined,
            reviews: await getReviews(user?.user_id, 'user') || undefined,
            created_at: user?.created_at || 0,
        }
    }catch(error){
        console.log('Error fetching user profile', error);
    }
}

export async function getStorefront(storefront_id: string): Promise<Storefront | undefined>{
   
    try{
        const promise = client.models.Storefront.get({storefront_id});  
        const store = (await promise).data;
        return{
            storefront_id: store!.storefront_id,
            title: store!.storefront_title,
            description: store!.description,
            owner_id: store!.owner_id, 
            rating: store?.ratings || -1,
            products: await getProducts(store?.storefront_id) || [],
        }
    }catch(error: unknown){
        console.log("Error fetching storefront: ", error); 
    }
}

async function getProducts(storefront_id: string | undefined): Promise<Product[] | undefined>{
    try{
        if(storefront_id !== undefined){
            const promise = await client.queries.fetchProducts({storefront_id});

            const results = (await promise).data;

            const products = results?.map((product) => {
                return{
                    product_id: product!.product_id || '', 
                    description: product!.description || '',
                    price: product!.price,
                    picture: product?.picture || '',
                    is_available: product?.isAvailable || false,
                }
            });
            return products;
        }
    }
    catch(error){
        console.log('Error fetching products: ', error); 
    }

}

async function getReviews(id: string | undefined, type: string): Promise<Review[] | undefined>{
    try{
        let promise: any;
        if(type == 'user'){
            promise = await client.queries.fetchReviews({user_id: id});
        }else{
            promise = await client.queries.fetchReviews({storefront_id: id})
        }
            const result = (await promise).data;

           const reviews = result?.map((review: any) => {
                return{
                    review_id: review?.review_id || '',
                    reviewer_id: review?.reviewer_id || '',
                    storefront_id: review?.storefront_id || '',
                    rating: review?.rating || -1,
                    comment: review?.comment || '',
                    created_at: review?.created_at || 0,
                }
           });
           return reviews;
    }catch(error){
        console.log("Error fetching reviews: ", error); 
    }

}

export function generateId(): string{
    return uuidv4();
}


