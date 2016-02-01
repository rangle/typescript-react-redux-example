import * as React from 'react';
const objectAssign = require('object-assign');

const Form = ({ children, style = {}, handleSubmit }) => {
  return (
    <form
      style={ objectAssign({}, ...styles.base, style) }
      onSubmit={(e) => {
        e.preventDefault();
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement.blur) {
          activeElement.blur();
        }
        handleSubmit();
      }}>
      { children }
    </form>
  );
};

const styles = {
  base: [],
};


export default Form;
