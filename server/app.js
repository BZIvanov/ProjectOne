const express = require('express'); //
const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./graphqlSchema/schema');
const cors = require('cors');

const app = express(); //

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
  })
);

module.exports = app; //
