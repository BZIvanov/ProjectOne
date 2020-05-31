const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const Movie = require('./models/movie');

const { typeDefs } = require('./schema');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const app = express();

app.use(async (req, res, next) => {
  let token = req.headers['authorization'];
  if (token) {
    token = token.split(' ')[1];
    try {
      const currentUser = await jwt.verify(token, process.env.JWT_SECRET);
      req.currentUserId = currentUser.id;
    } catch (err) {
      console.log(err);
    }
  }
  next();
});

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: (reqRes) => {
    const currentUserId = reqRes.req.currentUserId;
    return {
      User,
      Movie,
      currentUserId,
    };
  },
});

server.applyMiddleware({ app });

module.exports = app;
