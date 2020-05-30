import React from 'react';
import { MoviesList } from '../../organisms';
import { TextInput, Button, TextWarning } from '../../atoms';

const Home = () => {
  return (
    <div>
      <MoviesList />
      <TextInput placeholder="Username" />
      <Button>Hello</Button>
      <TextWarning>Nice</TextWarning>
    </div>
  );
};

export default Home;
