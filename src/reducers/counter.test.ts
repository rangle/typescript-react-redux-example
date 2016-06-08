import * as assert from 'assert';
import fireAction from '../../test/fire-action';
import counterReducer from './counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants';
import { Map } from 'immutable';

let state = counterReducer();

describe('counter reducer', () => {
  describe('inital state', () => {
    it('should be a Map', () => {
      assert.strictEqual(Map.isMap(state), true);
    });
  });

  describe('on INCREMENT_COUNTER', () => {
    it('should increment state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, INCREMENT_COUNTER);
      assert.strictEqual(state.get('count'), previousValue + 1);
    });
  });

  describe('on DECREMENT_COUNTER', () => {
    it('should decrement state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, DECREMENT_COUNTER);
      assert.strictEqual(state.get('count'), previousValue - 1);
    });
  });
});
