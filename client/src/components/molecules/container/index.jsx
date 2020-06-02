import React from 'react';
import { ColoredBackground, AppWidth } from '../../atoms';

const Container = ({ backColor, children }) => {
  return (
    <ColoredBackground backColor={backColor}>
      <AppWidth>{children}</AppWidth>
    </ColoredBackground>
  );
};

export default Container;
