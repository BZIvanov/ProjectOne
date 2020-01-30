import React from 'react';
import { GridListTile } from '@material-ui/core';
import { useStyles } from './styles';

interface Movie {
  movie: {
    id: string;
    name: string;
    year: number;
    imageUrl?: string;
  }
  style?: any
}

const Movie: React.FC<Movie> = ({ movie, style }) => {
  const classes = useStyles();

  return (
    // we destructure style like this to get the styles from the parent material ui component, because GridListTile component is in external component
    <GridListTile cols={1} rows={3} style={{...style}} >
      <div className={classes.tileContent}>
        <h2>{movie.name}</h2>
        <p>{movie.year}</p>
        <img src={movie.imageUrl} alt={movie.name} />
      </div>
    </GridListTile>
  )
};

export default Movie;
