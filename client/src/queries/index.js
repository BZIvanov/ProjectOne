import { gql } from 'apollo-boost';

export const GET_ALL_MOVIES = gql`
  query {
    getAllMovies {
      title
      year
    }
  }
`;
