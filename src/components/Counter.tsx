import * as React from 'react';
import Button from './Button';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div style={ objectAssign({}, ...styles.container) }>
      <div style={ objectAssign({}, ...styles.buttonContainer) }>
        <Button
          style={ objectAssign({}, ...styles.buttonBase, styles.squareButton) }
          onClick={ decrement }>
          -
        </Button>
      </div>

      <div style={ objectAssign({}, ...styles.counter) }>
        { counter }
      </div>

      <div style={ objectAssign({}, ...styles.buttonContainer) }>
        <Button
          style={ objectAssign({}, ...styles.buttonBase, styles.squareButton) }
          onClick={ increment }>
          +
        </Button>
      </div>
    </div>
  );
};

const styles = {
  container: [ Bass.flex, Bass.flexCenter ],
  buttonContainer: [ Bass.flexAuto, Bass.center ],
  counter: [ Bass.flexAuto, Bass.center, Bass.h1 ],
  buttonBase: [ Bass.btn, Bass.btnPrimary, Bass.flex ],
  squareButton: {
    width: 48,
    height: 48,
  },
};


export default Counter;
