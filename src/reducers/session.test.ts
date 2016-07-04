import { Map } from 'immutable';

import fireAction from '../../test-utils/fire-action';
import sessionReducer from '../reducers/session';

import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from '../../src/constants/index';

let state = sessionReducer();

describe('Session Reducer', () => {
  describe('inital state', () => {
    it('should be a Map', () => {
      expect(Map.isMap(state)).toBe(true);
    });
  });

  describe('on LOGIN_USER_PENDING', () => {
    it('should set loading to true', () => {
      state = fireAction(sessionReducer, state, LOGIN_USER_PENDING);
      expect(state.get('isLoading')).toBe(true);
      expect(state.get('token')).toBeNull();
    });
  });

  describe('on LOGIN_USER_SUCCESS', () => {
    it('should save the username', () => {
      state = fireAction(
        sessionReducer,
        state,
        LOGIN_USER_SUCCESS,
        { token: 1234 });

      expect(state.get('isLoading')).toBe(false);
      expect(state.get('hasError')).toBe(false);
      expect(state.get('token')).toBe(1234);
    });
  });

  describe('on LOGIN_USER_ERROR', () => {
    it('should save the username', () => {
      state = fireAction(sessionReducer, state, LOGIN_USER_ERROR);

      expect(state.get('isLoading')).toBe(false);
      expect(state.get('hasError')).toBe(true);
    });
  });


  describe('on LOGOUT_USER', () => {
    it('should save the username', () => {
      state = fireAction(sessionReducer, state, LOGOUT_USER);

      expect(state.get('isLoading')).toBe(false);
      expect(state.get('hasError')).toBe(false);
      expect(state.get('token')).toBeNull();
    });
  });
});
