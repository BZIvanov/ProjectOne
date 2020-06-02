import React from 'react';
import { FactoryIcon } from '../../atoms';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">
        <FactoryIcon themeColor="c" size={36} />
      </Link>
      <ul>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Signin</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
