import * as React from 'react';
import { reduxForm } from 'redux-form';
import Form from './Form';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormError from './FormError';
import Input from './Input';
import Button from './Button';
import Alert from './Alert';
const Bass = require('basscss-radium');
const objectAssign = require('object-assign');


const validate = values => {
  const errors = { username: '', password: '' };

  if (!values.username) {
    errors.username = 'Username is required.';
  }

  if (!values.password) {
    errors.password = 'Password is required.';
  }

  return errors;
};

const LoginForm = (props) => {
  const {
    handleSubmit,
    resetForm,
    isPending,
    hasError,
    fields: {
      username,
      password,
    },
  } = props;

  return (
    <Form handleSubmit={ handleSubmit }>
      <Alert isVisible={ isPending }>Loading...</Alert>
      <Alert isVisible={ hasError } status="error">
        Invalid username and password
      </Alert>

      <FormGroup>
        <FormLabel>Username</FormLabel>
        <Input type="text" fieldDefinition={ username } />
        <FormError isVisible={ username.touched && username.error }>
          { username.error }
        </FormError>
      </FormGroup>

      <FormGroup>
        <FormLabel>Password</FormLabel>
        <Input type="password" fieldDefinition={ password } />
        <FormError isVisible={ password.touched && password.error }>
          { password.error }
        </FormError>
      </FormGroup>

      <FormGroup>
        <Button type="submit">
          Login
        </Button>
        <Button
          onClick={ resetForm }
          type="button"
          style={ objectAssign({}, Bass.ml2, Bass.bgRed) }>
          Clear
        </Button>
      </FormGroup>
    </Form>
  );
};


export default reduxForm({
  form: 'login',
  fields: [
    'username',
    'password',
  ],
  validate,
})(LoginForm);
