"use client"
import { generateClient } from "aws-amplify/data";
import type { UserSchema } from "../../amplify/data/resource";

const client = generateClient<UserSchema>() // use this Data client for CRUDL requests

export async function createUserProfile(){}

export async function getUserProfile(){
    const data = await client.models.User.list()
    return data; 
}

export  async function createStorefront(){}

export async function getStorefront(){}

export async function getStorefrontReviews(storefront_id: number){}


