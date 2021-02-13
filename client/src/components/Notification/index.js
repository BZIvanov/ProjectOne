import { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

function TransitionUp(props) {
  return <Slide {...props} direction='up' />;
}

Notification = ({ message }) => {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  useEffect(() => {
    if (message) {
      setTransition(() => TransitionUp);
      setOpen(true);
    }
  }, [message]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message={message}
        key={transition ? transition.name : ''}
      />
    </div>
  );
};

export default Notification;
