import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Home } from './components/pages';
import { GlobalStyles } from './components/atoms';

const client = new ApolloClient({
  uri: 'http://localhost:3100/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
