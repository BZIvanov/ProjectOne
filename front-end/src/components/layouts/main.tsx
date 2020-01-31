import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../organisms/header/header';
import Movies from '../organisms/movies/movies';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Movies />
    </Container>
  )
}

export default Main;
