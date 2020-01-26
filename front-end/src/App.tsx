import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import HomePage from './components/home-page/home-page';

const client = new ApolloClient({
  uri: 'http://localhost:3279/graphql',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  );
}

export default App;
