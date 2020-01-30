import React from 'react';
import { Container } from '@material-ui/core';
import Movies from '../organisms/movies/movies';

const HomePage: React.FC = () => {
  return (
    <Container>
      <h1>Hello This is my navigation</h1>
      <Movies />
    </Container>
  )
}

export default HomePage;
