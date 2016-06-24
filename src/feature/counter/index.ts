import { fromJS } from 'immutable';
import {LOGOUT_USER} from '../session';

export const INCREMENT_COUNTER = 'App/INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'App/DECREMENT_COUNTER';
// Actions
export function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
  };
}


const INITIAL_STATE = fromJS({
  count: 0,
});

function counterReducer(state = INITIAL_STATE, action = { type: '' }) {
  switch (action.type) {

  case INCREMENT_COUNTER:
    return state.update('count', (value) => value + 1);

  case DECREMENT_COUNTER:
    return state.update('count', (value) => value - 1);

  case LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
}


export default counterReducer;
