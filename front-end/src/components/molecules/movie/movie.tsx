import React, { useState } from 'react';
import { GridListTile, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Collapse } from '@material-ui/core';
import { MoreVert as MoreVertIcon, Favorite as FavoriteIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import clsx from 'clsx';
import { useStyles } from './styles';

interface Movie {
  movie: {
    id: string;
    name: string;
    year: number;
    description: string;
    imageUrl?: string;
  }
  style?: any
}

const Movie: React.FC<Movie> = ({ movie, style }) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // we destructure style like this to get the styles from the parent material ui component, because GridListTile component is in external component
    <GridListTile cols={1} style={{...style}} className={classes.wrapper} >
      <Card className={classes.card}>
        {/* TODO add user profile pic for the Avatar */}
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} alt="Profile pic">
              BI
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={movie.name}
          subheader={`Release year: ${movie.year}`}
        />

        <CardMedia
          className={classes.media}
          image={movie.imageUrl}
          title={movie.name}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Preview:</Typography>
          <iframe src="https://www.youtube.com/embed/HhjHYkPQ8F0?controls=1" allowFullScreen title={movie.name} />
        </CardContent>
      </Collapse>
      </Card>
    </GridListTile>
  )
};

export default Movie;
