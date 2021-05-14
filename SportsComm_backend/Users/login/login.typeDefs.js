import { gql } from "apollo-server";

export default gql`
  type LoginResult {
    ok: Boolean!
    token: String
    error: String
    type: String
  }

  type GetRole {
    type: String!
  }

  type Mutation {
    login(username: String!, password: String!): LoginResult
  }

  type Query {
    getRole(username: String!): GetRole!
  }
`;
