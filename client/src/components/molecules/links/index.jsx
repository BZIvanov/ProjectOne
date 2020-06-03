import React, { useState, useEffect } from 'react';
import { NavItems, NavItem, NavLink } from '../../atoms';

const Links = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setAuth(true);
    }
  }, []);

  return (
    <NavItems>
      {auth ? (
        <>
          <NavItem>
            <NavLink to="/movie/add">Add Movie</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/logout">Logout</NavLink>
          </NavItem>
        </>
      ) : (
        <>
          <NavItem>
            <NavLink to="/signup">Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signin">Signin</NavLink>
          </NavItem>
        </>
      )}
    </NavItems>
  );
};

export default Links;
