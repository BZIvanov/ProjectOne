import React from 'react';
import styled from 'styled-components';

const NavCss = styled.nav`
  display: flex;
  align-items: center;
`;

const AppNav = ({ children }) => {
  return <NavCss>{children}</NavCss>;
};

export default AppNav;
