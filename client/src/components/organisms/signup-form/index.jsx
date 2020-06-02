import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import schema from './schema';
import formBuilder from './formBuilder';
import { CommonForm } from '../../molecules';
import { SIGNUP } from './gql';

const ContentCss = styled.div`
  display: flex;
  justify-content: center;
`;

const SignupForm = () => {
  const [signupUser] = useMutation(SIGNUP);

  const handleFormSubmit = (data) => {
    const { username, email, password } = data;
    signupUser({ variables: { username, email, password } }).then((data) => {
      localStorage.setItem('token', data.data.signup.token);
    });
  };

  return (
    <ContentCss>
      <CommonForm
        title="Signup form"
        buttonText="Signup"
        formBuilder={formBuilder}
        schema={schema}
        onFormSubmit={handleFormSubmit}
      />
    </ContentCss>
  );
};

export default SignupForm;
