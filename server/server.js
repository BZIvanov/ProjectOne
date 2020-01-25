const PORT = 3279;

const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./schema/schema');

const app = express();

// on the below route is where all the graphql requests will be handled. And here we will provide the schema.
app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true        // this property will open the graphql playground, when we go to the /graphql url
}));

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
