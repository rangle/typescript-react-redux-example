import * as React from 'react';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');

const FormGroup = ({ children, style = {} }) => {
  return (
    <div style={ objectAssign({}, ...styles.base, style) }>
      { children }
    </div>
  );
};

const styles = {
  base: [ Bass.p2 ],
};


export default FormGroup;
