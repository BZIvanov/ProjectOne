import React from 'react';

interface Movie {
  movie: {
    name: string;
    year: number;
  }
}

const Movie: React.FC<Movie> = (props) => {
  return (
    <h1>{props.movie.name}</h1>
  )
};

export default Movie;
