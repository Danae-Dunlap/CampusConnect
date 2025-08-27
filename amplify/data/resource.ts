import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const userSchema = a.schema({
  User: a
    .model({
      user_id: a.integer(),
      username: a.string(),
      email: a.email(),
      is_seller: a.boolean(),
      storefront_id: a.integer(),
      reviews: a.string(), //figure out how to change this to list
      created_at: a.timestamp()
    })
    .authorization((allow) => [allow.owner()]),
});
export type UserSchema = ClientSchema<typeof userSchema>;
export const userData = defineData({
  schema: userSchema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});

const storefrontSchema = a.schema({
  Storefront: a
    .model({
      storefront_id: a.integer(),
      owner_id: a.integer(), 
      products: a.json(),
      ratings: a.float(),
      description: a.string(),
      created_at: a.timestamp()
    })
    .authorization((allow) => [allow.owner()]),
});
export type StoreSchema = ClientSchema<typeof storefrontSchema>;
export const storeData = defineData({
  schema: storefrontSchema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});

const reviewSchema = a.schema({
  User: a
    .model({
      review_id: a.integer(),
      reviewer_id: a.integer(),
      storefront_id: a.integer(),
      rating: a.integer(),
      comment: a.string(),
      created_at: a.timestamp()
    })
    .authorization((allow) => [allow.owner()]),
});
export type ReviewSchema = ClientSchema<typeof reviewSchema>;
export const reviewData = defineData({
  schema: reviewSchema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});
