import * as React from 'react';
const objectAssign = require('object-assign');


const FormLabel = ({ children, style = {} }) => {
  return (
    <label style={ objectAssign({}, ...styles.base, style) }>
      { children }
    </label>
  );
};

const styles = {
  base: [],
};


export default FormLabel;
