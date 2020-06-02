import React from 'react';
import { NavItems, NavItem, NavLink } from '../../atoms';

const Links = () => {
  return (
    <NavItems>
      <NavItem>
        <NavLink to="/signup">Signup</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/signin">Signin</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/logout">Logout</NavLink>
      </NavItem>
    </NavItems>
  );
};

export default Links;
