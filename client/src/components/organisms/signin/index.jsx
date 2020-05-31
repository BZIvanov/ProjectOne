import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import schema from './schema';
import formBuilder from './formBuilder';
import { CommonForm } from '../../molecules';
import { SIGNIN } from './gql';

const Signin = () => {
  const [signinUser] = useMutation(SIGNIN);

  const handleFormSubmit = (data) => {
    const { email, password } = data;
    signinUser({ variables: { email, password } }).then((data) => {
      localStorage.setItem('token', data.data.signin.token);
    });
  };

  return (
    <div>
      <CommonForm
        title="Signin form"
        buttonText="Signin"
        formBuilder={formBuilder}
        schema={schema}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Signin;
