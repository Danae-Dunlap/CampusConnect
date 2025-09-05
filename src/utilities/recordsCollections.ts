"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import type {UserProfile, Storefront, Review} from './interface';

const client = generateClient<Schema>()
const now = new Date();

export async function createUserProfile(user: UserProfile){
    const promise = client.models.User.create({
        user_id: generateId(), 
        username: user.username,
        email: user.email,
        is_seller: false,
        storefront_id: -1,
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

//Look into hasOne
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


//Create custom query
export async function getUserProfile(){

}

//Create custom query
export async function getStorefront(storefront_id: string){
    const promise = client.models.Storefront.get({storefront_id}); 

    try{
        await promise;
    }catch(error: unknown){
        console.log("Error fetching storefront: ", error); 
    }
}

//Create custom query
export async function getStorefrontReviews(storefront_id: string){
    const promise = client.models.Review.list();

    try{
        await promise;
        const results = (await promise).data;
        results.map((result: any) => {
            return result.id
        }); 

    }catch(error: unknown){
        console.log("Error fetching reviews for storefront", storefront_id, ". Error message: ", error); 
    }
}

export function generateId(): string{
    const identification = 0;

    return identification.toString();
}


