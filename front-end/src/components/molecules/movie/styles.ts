import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  tileContent: {
    display: 'flex',
    color: theme.palette.secondary.dark,
    flexDirection: 'column',
    justifyContent: 'space-around',
    '& img': {
      display: 'block',
      width: '100%'
    },
  },
}));
