import React from 'react';
import { Heading, TextInput, TextWarning, Button } from '../../atoms';
import { useForm } from 'react-hook-form';

const CommonForm = (props) => {
  const { onFormSubmit, formBuilder, schema, title, buttonText } = props;
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const inputs = Object.keys(formBuilder).map((input) => (
    <div key={input}>
      <TextInput
        name={input}
        ref={register}
        placeholder={formBuilder[input].label}
        type={formBuilder[input].type}
      />
      {errors[input] && <TextWarning>{errors[input].message}</TextWarning>}
    </div>
  ));

  return (
    <div>
      <Heading variant="h2">{title}</Heading>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        {inputs}
        <Button type="submit">{buttonText}</Button>
      </form>
    </div>
  );
};

export default CommonForm;
