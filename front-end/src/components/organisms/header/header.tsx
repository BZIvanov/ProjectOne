import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from './styles';

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Project One
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Header;
