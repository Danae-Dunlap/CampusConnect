import { type ClientSchema, a, defineData, defineFunction } from '@aws-amplify/backend';



const schema = a.schema({
  User: a
    .model({
      user_id: a.id().required(),
      username: a.string(),
      email: a.email(),
      is_seller: a.boolean(),
      storefront_id: a.string(),
      reviews: a.string().array(),
      created_at: a.timestamp()
    })
    .identifier(['user_id'])
    .authorization((allow) => [allow.guest()]),
    Storefront: a
    .model({
      storefront_id: a.string().required(),
      storefront_title: a.string().required(),
      owner_id: a.string().required(), 
      products: a.string().array(),
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
      product_id: a.string().required(),
      description: a.string(),
      price: a.float().required(),
      picture: a.string(),
      isAvailable: a.boolean(),
    })
    .identifier(['product_id'])
    .authorization((allow) => [allow.guest()]), 
    fetchProducts: a.query()
    .arguments({storefront_id: a.string().required()})
    .returns(a.ref('Product').array())
    .authorization(allow => [allow.authenticated()]),
    fetchUser: a.query()
    .arguments({username: a.string().required()})
    .returns(a.ref('User'))
    .authorization(allow => [allow.authenticated()]),
    fetchReviews: a.query()
    .arguments({
      storefront_id: a.string(),
      user_id: a.string(),
    })
    .returns(a.ref('Review'))
    .authorization(allow => [allow.authenticated()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema: schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});
