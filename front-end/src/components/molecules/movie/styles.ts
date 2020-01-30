import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  tileContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    '& img': {
      display: 'block',
      width: '100%'
    },
  },
});
