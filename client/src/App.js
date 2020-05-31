import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import client from './apolloClient';
import theme from './theme';
import { Home } from './components/pages';
import { GlobalStyles } from './components/atoms';

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
