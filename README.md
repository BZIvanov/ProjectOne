## Working with the server

To run the server type **npm run dev** as specified in the package.json file. Respectively to stop the server use **ctrl + c** in the terminal.

The GraphQL playground is accessible at *http://localhost:3279/graphql*


### Experienced issues

1. TypeScript complains with import React after installing *react-router-dom*.

Fix: delete node_modules folder and package-lock.json file and then install them back again.
