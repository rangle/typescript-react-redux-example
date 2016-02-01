import * as React from 'react';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');

const Input = (props) => {
  const {
    type = 'text',
    style = {},
    placeholder = '',
    fieldDefinition,
  } = props;

  return (
    <input style={ objectAssign({}, ...styles.base, style) }
      type={ type }
      placeholder={ placeholder }
      { ...fieldDefinition } />
  );
};

const styles = {
  base: [ Bass.block, Bass.col12, Bass.mb1, Bass.field ],
};


export default Input;
