import * as React from 'react';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');


const Navigator = ({ children }) => {
  return (
    <div
      style={ objectAssign({}, ...styles.base) }>
      { children }
    </div>
  );
};

const styles = {
  base: [
    Bass.flex,
    Bass.flexStretch,
    Bass.flexCenter,
    Bass.p1,
    Bass.bgWhite,
    Bass.borderBottom,
    Bass.top0,
    Bass.left0,
    Bass.right0,
    Bass.z3
  ]
};


export default Navigator;
