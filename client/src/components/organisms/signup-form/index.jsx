import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import schema from './schema';
import formBuilder from './formBuilder';
import { CommonForm } from '../../molecules';
import { withFormStyles, Heading } from '../../atoms';
import { SIGNUP } from './gql';

const SignupForm = () => {
  const [signupUser] = useMutation(SIGNUP);

  const handleFormSubmit = (data) => {
    const { username, email, password } = data;
    signupUser({ variables: { username, email, password } })
      .then((data) => {
        localStorage.setItem('token', data.data.signup.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Heading variant="h2">Signup here</Heading>
      <CommonForm
        buttonText="Signup"
        formBuilder={formBuilder}
        schema={schema}
        onFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default withFormStyles(SignupForm);
