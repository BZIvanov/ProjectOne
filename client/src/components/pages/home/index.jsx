import React from 'react';
import { MoviesList, Signup } from '../../organisms';
import { TextInput, Button, TextWarning } from '../../atoms';

const Home = () => {
  return (
    <div>
      <MoviesList />
      <TextInput placeholder="Username" />
      <Button>Hello</Button>
      <TextWarning>Nice</TextWarning>
      <Signup />
    </div>
  );
};

export default Home;
