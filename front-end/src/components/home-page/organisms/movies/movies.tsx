import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './movies.css';

const MOVIES = gql`
  {
    movies {
      id
      name
      year
    }
  }
`;

interface Movie {
  id: string;
  name: string;
  year: number;
}

const Movies: React.FC = () => {
  const { loading, error, data } = useQuery(MOVIES);

  if (error) {
    console.log(error);
  }
  
  return (
    <>
      <h1>My Movies</h1>
      {loading ? null :
        data.movies.map((movie: Movie) => <div key={movie.id}>{movie.name}</div>)
      }
    </>
  )
}

export default Movies;
