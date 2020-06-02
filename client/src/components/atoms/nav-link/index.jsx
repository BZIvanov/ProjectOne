import React from 'react';
import { NavLink as NL } from 'react-router-dom';

const NavLink = ({ children, ...rest }) => {
  return <NL {...rest}>{children}</NL>;
};

export default NavLink;
