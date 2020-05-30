import React from 'react';
import styled from 'styled-components';

const ButtonCss = styled.button`
  color: ${(props) => props.theme.palette.secondary};
`;

const Button = () => {
  console.log('here');
  return <ButtonCss>Hello</ButtonCss>;
};

export default Button;
