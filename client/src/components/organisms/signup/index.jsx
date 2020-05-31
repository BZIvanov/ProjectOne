import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import schema from './schema';
import formBuilder from './formBuilder';
import { CommonForm } from '../../molecules';
import { SIGNUP } from './gql';

const Signup = () => {
  const [signupUser] = useMutation(SIGNUP);

  const handleFormSubmit = (data) => {
    const { username, email, password } = data;
    signupUser({ variables: { username, email, password } }).then((data) => {
      localStorage.setItem('token', data.data.signup.token);
    });
  };

  return (
    <div>
      <CommonForm
        title="Signup form"
        buttonText="Signup"
        formBuilder={formBuilder}
        schema={schema}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Signup;
