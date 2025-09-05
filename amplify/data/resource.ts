import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  User: a
    .model({
      user_id: a.id().required(),
      username: a.string(),
      email: a.email(),
      is_seller: a.boolean(),
      storefront_id: a.integer(),
      reviews: a.string().array(),
      created_at: a.timestamp()
    })
    .identifier(['user_id'])
    .authorization((allow) => [allow.guest()]),
    Storefront: a
    .model({
      storefront_id: a.id().required(),
      storefront_title: a.string().required(),
      owner_id: a.string().required(), 
      products: a.id().array(),
      ratings: a.float(),
      description: a.string().required(),
      created_at: a.timestamp(),
    })
    .identifier(['storefront_id'])
    .authorization((allow) => [allow.guest()]),
    Review: a
    .model({
      review_id: a.id().required(),
      reviewer_id: a.string(),
      storefront_id: a.string().required(),
      rating: a.integer().required(),
      comment: a.string(),
      created_at: a.timestamp()
    })
    .authorization((allow) => [allow.guest()])
    .identifier(['review_id']),
    Product: a.model({
      product_id: a.id().required(),
      description: a.string(),
      price: a.float().required(),
      isAvailable: a.boolean(),
    })
    .identifier(['product_id'])
    .authorization((allow) => [allow.guest()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema: schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});
