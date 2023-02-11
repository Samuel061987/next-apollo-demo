export default `
  type Users {
    name: String!
    address: String!
    email: String!
    phone: String!
  }
  type Query {
    users(limit : Int!, offset: Int!): [Users]
  }`