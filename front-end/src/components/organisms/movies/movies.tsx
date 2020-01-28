import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './movies.css';
import Loading from '../../atoms/loading/loading';
import Movie from '../../molecules/movie/movie';

const MOVIES = gql`
  {
    movies {
      id
      name
      year
      imageUrl
    }
  }
`;

interface MovieFields {
  id: string;
  name: string;
  year: number;
  imageUrl: string;
}

const Movies: React.FC = () => {
  const { loading, error, data } = useQuery(MOVIES);

  if (error) {
    console.log(error);
  }
  
  return (
    <>
      <h1>My Movies List</h1>
      {loading ? <Loading /> :
        data.movies.map((movie: MovieFields) => <Movie key={movie.id} movie={movie} />)
      }
    </>
  )
}

export default Movies;
