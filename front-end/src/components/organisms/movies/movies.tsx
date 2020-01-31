import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { GridList } from '@material-ui/core';
import Loading from '../../atoms/loading/loading';
import Movie from '../../molecules/movie/movie';
import { useStyles } from './styles';

const MOVIES = gql`
  {
    movies {
      id
      name
      year
      description
      imageUrl
    }
  }
`;

interface MovieFields {
  id: string;
  name: string;
  year: number;
  description: string;
  imageUrl: string;
}

const Movies: React.FC = () => {
  const { loading, error, data } = useQuery(MOVIES);

  const classes = useStyles();

  if (error) {
    console.log(error);
  }
  return (
    <>
      <h1>My Movies List</h1>
      <GridList cellHeight='auto' cols={3} className={classes.root}>
        {loading ? <Loading /> :
          data.movies.map((movie: MovieFields) => <Movie key={movie.id}  movie={movie} />)
        }
      </GridList>
    </>
  )
}

export default Movies;
