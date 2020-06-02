import React from 'react';
import styled from 'styled-components';

const FormCss = styled.section`
  background-color: ${(props) =>
    props.backColor || props.theme.palette.offWhite};
`;

const withFormStyles = (WrappedComponent) => {
  return (props) => (
    <FormCss>
      <WrappedComponent {...props} />
    </FormCss>
  );
};

export default withFormStyles;
