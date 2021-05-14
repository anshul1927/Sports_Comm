import { gql } from "apollo-server-express";

export default gql`
  type DeleteCategory {
    ok: Boolean!
    error: String
  }

  type Mutation {
    deleteCategory(category: String): DeleteCategory!
  }
`;
