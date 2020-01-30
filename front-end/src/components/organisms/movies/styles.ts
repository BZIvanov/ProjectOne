import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.success.light,
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
}));
