import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_MOVIES } from '../../../queries';

const MoviesList = () => {
  const { loading, error, data } = useQuery(GET_ALL_MOVIES);
  console.log(loading);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <h1>Movies</h1>;
};

export default MoviesList;