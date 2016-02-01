import * as React from 'react';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');

const Content = ({ children, style = {}, isVisible }) => {
  return (
    <div style={ objectAssign({}, ...styles.base, style) }>
      { isVisible ? children : null }
    </div>
  );
};

const styles = {
  base: [Bass.mt3, Bass.p1],
};

export default Content;
