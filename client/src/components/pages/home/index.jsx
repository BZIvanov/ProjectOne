import React from 'react';
import { MoviesList, Signup, Signin } from '../../organisms';
import { TextInput, Button, TextWarning } from '../../atoms';

const Home = () => {
  return (
    <div>
      <MoviesList />
      <TextInput placeholder="Username" />
      <Button>Hello</Button>
      <TextWarning>Nice</TextWarning>
      <Signin />
    </div>
  );
};

export default Home;
