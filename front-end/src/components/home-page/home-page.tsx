import React from 'react';
import Movies from './organisms/movies/movies';

const HomePage: React.FC = () => {
  return (
    <>
      <h1>Hello This is my navigation</h1>
      <div>
        <Movies />
      </div>
    </>
  )
}

export default HomePage;
