import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import client from './apolloClient';
import theme from './theme';
import { Home } from './components/pages';
import { Header } from './components/organisms';
import { GlobalStyles } from './components/atoms';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
