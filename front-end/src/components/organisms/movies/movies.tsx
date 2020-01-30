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

  const classes = useStyles();

  if (error) {
    console.log(error);
  }
  return (
    <>
      <h1>My Movies List</h1>
      <div className={classes.root}>
        <GridList cellHeight={260} cols={3}>
          {loading ? <Loading /> :
            data.movies.map((movie: MovieFields) => <Movie key={movie.id}  movie={movie} />)
          }
        </GridList>
      </div>
    </>
  )
}

export default Movies;
