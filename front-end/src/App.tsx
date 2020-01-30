import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from './components/home-page/home-page';

const client = new ApolloClient({
  uri: 'http://localhost:3279/graphql',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <HomePage />
    </ApolloProvider>
  );
}

export default App;
