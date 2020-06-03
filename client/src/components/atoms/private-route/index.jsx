import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setAuth(true);
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
