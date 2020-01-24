const PORT = 3279;

const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// on the below route is where all the graphql requests will be handled. And here we will provide the schema.
app.use('/graphql', graphqlHTTP({

}));

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
