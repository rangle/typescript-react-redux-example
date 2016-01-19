import * as React from 'react';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');

const Container = ({ children, style = {} }) => {
  return (
    <div style={ objectAssign({}, ...styles.base, style) }>
      <div style={Bass.clearFix}>
        { children }
      </div>
    </div>
  );
};

const styles = {
  base: [Bass.container],
};


export default Container;
