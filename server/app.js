const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const User = require('./models/user');
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
    User,
    Movie,
  },
});

const app = express();
server.applyMiddleware({ app });

module.exports = app;
