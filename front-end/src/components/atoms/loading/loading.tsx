import React from 'react';
import { useStyles } from "./styles";

const Loading: React.FC = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.spinner}>
      <div className={classes.spinnerText}>Loading</div>
      <div className={`${classes.spinnerSector} ${classes.spinnerSectorRed}`}></div>
      <div className={`${classes.spinnerSector} ${classes.spinnerSectorBlue}`}></div>
      <div className={`${classes.spinnerSector} ${classes.spinnerSectorGreen}`}></div>
    </div>
  )
}

export default Loading;
