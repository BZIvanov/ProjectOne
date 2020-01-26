const env = process.env.NODE_ENV || 'development';

const config = require('./config/environment')[env];
require('./config/database')();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./graphqlSchema/schema');
const cors = require('cors');

const app = express();

app.use(cors());

// on the below route is where all the graphql requests will be handled. And here we will provide the schema.
app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true        // this property will open the graphql playground, when we go to the /graphql url
}));

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`))
