import * as React from 'react';
const ReduxForm = require('redux-form');

import Form from '../form/';
import FormGroup from '../form/form-group';
import FormLabel from '../form/form-label';
import FormError from '../form/form-error';
import Input from '../form/form-input';
import Button from '../button';
import Alert from '../alert';

interface ILoginFormProps {
  onSubmit: () => void;
  handleSubmit?: () => void;
  resetForm?: () => void;
  isPending: boolean;
  hasError: boolean;
  fields?: {
    username: any;
    password: any;
  };
};

// Making this a class-based component until redux-form typings support 
// stateless functional components.
class LoginForm extends React.Component<ILoginFormProps, void> {
  render() {
    const {
      handleSubmit,
      resetForm,
      isPending,
      hasError,
      fields: {
        username,
        password
      }
    } = this.props;

    return (
      <Form handleSubmit={ handleSubmit }>
        <Alert
          testid="alert-loading"
          isVisible={ isPending }>
          Loading...
        </Alert>
        <Alert
          testid="alert-error"
          id="qa-alert"
          isVisible={ hasError }
          status="error">
          Invalid username and password
        </Alert>

        <FormGroup testid="login-username">
          <FormLabel id="qa-uname-label">Username</FormLabel>
          <Input
            type="text" fieldDefinition={ username }
            id="qa-uname-input"
            placeholder="Username"/>
          <FormError id="qa-uname-validation"
            isVisible={ !!(username.touched && username.error) }>
            { username.error }
          </FormError>
        </FormGroup>

        <FormGroup testid="login-password">
          <FormLabel id="qa-password-label">Password</FormLabel>
          <Input type="password"
            fieldDefinition={ password }
            id="qa-password-input"
            placeholder="Password" />
          <FormError id="qa-password-validation"
            isVisible={ !!(password.touched && password.error) }>
            { password.error }
          </FormError>
        </FormGroup>

        <FormGroup testid="login-submit">
          <Button type="submit" className="mr1" id="qa-login-button">
            Login
          </Button>
          <Button onClick={ resetForm }
            type="reset"
            className="bg-red" id="qa-clear-button">
            Clear
          </Button>
        </FormGroup>
      </Form>
    );
  }

  static validate(values) {
    const errors = { username: '', password: '' };

    if (!values.username) {
      errors.username = 'Username is required.';
    }

    if (!values.password) {
      errors.password = 'Password is required.';
    }

    return errors;
  }
}

export default ReduxForm.reduxForm({
  form: 'login',
  fields: [
    'username',
    'password',
  ],
  validate: LoginForm.validate,
})(LoginForm);
