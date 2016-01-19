import * as React from 'react';
import * as Radium from 'radium';
const Bass = require('basscss-radium');
const objectAssign = require('object-assign');


const Alert = ({ 
    children,
    isVisible,
    status = 'info',
    style = {}
  }) => {

  const visibleStyle = isVisible ? Bass.block : Bass.hide;

  return (
    <div
      style={ objectAssign({}, ...styles.base, ...styles[status], visibleStyle, style) }>
      { children }
    </div>
  );
};

const styles = {
  base: [Bass.p2, Bass.bold],
  info: [Bass.bgBlue, Bass.white],
  warning: [Bass.bgYellow, Bass.black],
  success: [Bass.bgGreen, Bass.black],
  error: [Bass.bgRed, Bass.white]
};

export default Alert;
