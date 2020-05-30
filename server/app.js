const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const Movie = require('./models/movie');

const { typeDefs } = require('./schema');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    Movie,
  },
});

const app = express();
server.applyMiddleware({ app });

module.exports = app;
