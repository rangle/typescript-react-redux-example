import * as React from 'react';
import Modal from './Modal';
import ModalContent from './ModalContent';
import LoginForm from './LoginForm';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');

const LoginModal = ({ isVisible, isPending, hasError, onSubmit }) => {
  return (
    <Modal isVisible={ isVisible }>
      <ModalContent style={ objectAssign({}, ...styles.base) }>
        <h1 style={ objectAssign({}, ...styles.h1) }>Login</h1>

        <LoginForm
          isPending={ isPending }
          hasError={ hasError }
          onSubmit={ onSubmit } />
      </ModalContent>
    </Modal>
  );
};

const styles = {
  h1: [ Bass.mr2, Bass.ml2 ],
  base: [],
};


export default LoginModal;
