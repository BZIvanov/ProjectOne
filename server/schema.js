const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Query {
    hello: String
    movie: Movie!
  }

  type Movie {
    name: String!
    year: Int!
    description: String!
    rating: Float
  }
`;
