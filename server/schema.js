const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Query {
    movies: [Movie!]!
  }

  type Mutation {
    addMovie(data: CreateMovieInput!): Movie!
  }

  type Movie {
    id: ID!
    name: String!
    releaseYear: Int!
    imageUrl: String!
    description: String!
  }

  input CreateMovieInput {
    name: String!
    releaseYear: Int!
    imageUrl: String!
    description: String
  }
`;
