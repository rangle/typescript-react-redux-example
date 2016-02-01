import * as React from 'react';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');

const FormError = ({ children, isVisible, style = {} }) => {
  const visibleStyle = isVisible ? Bass.block : Bass.hide;

  return (
    <div
      style={ objectAssign({}, ...styles.base, visibleStyle, style) }>
      { children }
    </div>
  );
};

const styles = {
  base: [ Bass.bold, Bass.black ],
};


export default FormError;
