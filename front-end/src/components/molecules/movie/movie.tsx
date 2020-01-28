import React from 'react';

interface Movie {
  movie: {
    name: string;
    year: number;
    imageUrl?: string;
  }
}

const Movie: React.FC<Movie> = ({movie}) => {
  return (
    <>
      <h1>{movie.name}</h1>
      <p>{movie.year}</p>
      <img src={movie.imageUrl} alt={movie.name}/>
    </>
  )
};

export default Movie;
