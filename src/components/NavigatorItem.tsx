import * as React from 'react';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');

const NavigatorItem = ({ children, isVisible = true }) => {
  const visibleStyle = isVisible ? Bass.block : Bass.hide;

  return (
    <div style={ objectAssign({}, ...styles.base, visibleStyle) }>
      { children }
    </div>
  );
};

const styles = {
  base: [ Bass.p1 ],
};


export default NavigatorItem;
