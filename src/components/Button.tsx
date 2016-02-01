import * as React from 'react';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');

const Button = (props) => {
  const {
    children,
    style = {},
    type = 'button',
    onClick,
  } = props;

  return (
    <button
      type={ type }
      style={ objectAssign({}, ...styles.base, style) }
      onClick={ onClick }>
      { children }
    </button>
  );
};

const styles = {
  base: [Bass.btn, Bass.btnPrimary],
};


export default Button;
