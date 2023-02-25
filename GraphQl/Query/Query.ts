import { gql, useQuery } from "@apollo/client";

export const GET_DATA = gql`
  query Query {
    getData {
      amount
      model
      id
      name
      quantity
      year
    }
  }
`;
