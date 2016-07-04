import { Map } from 'immutable';

import fireAction from '../../test-utils/fire-action';

import counterReducer from './counter';

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../constants';

let state = counterReducer();

describe('counter reducer', () => {
  describe('inital state', () => {
    it('should be a Map', () => {
      expect(Map.isMap(state)).toBe(true);
    });
  });

  describe('on INCREMENT_COUNTER', () => {
    it('should increment state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, INCREMENT_COUNTER);
      expect(state.get('count')).toBe(previousValue + 1);
    });
  });

  describe('on DECREMENT_COUNTER', () => {
    it('should decrement state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, DECREMENT_COUNTER);
      expect(state.get('count')).toBe(previousValue - 1);
    });
  });
});

