import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  spinner: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90px",
    height: "90px",
  },
  spinnerText: {
    animation: "$loadingOpacity 3s ease-in infinite",   // $ sign before the name of the animation is very important here
    fontSize: "1.4em",
  },
  spinnerSector: {
    borderRadius: "50%",
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "10px solid transparent",
    mixBlendMode: "overlay",
  },
  spinnerSectorRed: {
    animation: "$rotate 2.5s ease-in infinite",
    borderTop: "10px solid lightcoral",
  },
  spinnerSectorBlue: {
    animation: "$rotate 2s ease-out infinite",
    borderTop: "10px solid lightblue",
  },
  spinnerSectorGreen: {
    animation: "$rotate 1.5s ease-in-out infinite",
    borderTop: "10px solid lightgreen",
  },
  "@keyframes loadingOpacity": {
    "0%, 100%": {
        opacity: 1
    },
    "25%, 75%": {
        opacity: 0.5
    },
    "50%": {
        opacity: 0.1
    }
  },
  "@keyframes rotate": {
    "from": { transform: "rotate(0)" },
    "to": { transform: "rotate(360deg)" }
  }
});
