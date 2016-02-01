import * as React from 'react';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');


const ModalContent = ({ children, style = {} }) => {
  return (
    <div style={ objectAssign({}, ...styles.base, style) }>
      { children }
    </div>
  );
};

const styles = {
  base: [Bass.p1, Bass.z4, Bass.bgWhite, {
    width: '25%',
    margin: '4rem auto',
  }],
};


export default ModalContent;
