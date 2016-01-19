import * as React from 'react';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');


const Modal = ({ isVisible, children, style = {} }) => {
  const visibleStyle = isVisible ? styles.visible : styles.hidden;

  return (
    <div
      style={ objectAssign({}, ...styles.base, visibleStyle, style) }>
      { children }
    </div>
  );
};

const styles = {
  base: [
    Bass.fixed,
    Bass.top0,
    Bass.bottom0,
    Bass.left0,
    Bass.right0,
    Bass.p1,
    {
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      transition: 'visibility 250ms, opacity 250ms',
    }
  ],
  visible: {
    visibility: 'visible',
    opacity: 1,
    zIndex: 999,
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
    zIndex: 0,
  },
};


export default Modal;
