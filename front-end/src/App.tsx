import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from './components/layouts/main';

const client = new ApolloClient({
  uri: 'http://localhost:3279/graphql',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
