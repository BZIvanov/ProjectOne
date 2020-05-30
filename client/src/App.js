import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Home } from './components/pages';
import { GlobalStyles } from './components/atoms';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
