import { login } from '../api/login';
import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  FORM_RESET,
} from '../constants';


export function loginUser() {
  return (dispatch, getState) => {
    const username = getState().form.login.username.value;
    const password = getState().form.login.password.value;
    let loginPromise = login(username, password);
    loginPromise.then((res) => {
            dispatch({
              type: FORM_RESET,
              form: 'login',
            });
            return res;
          }, function(reason) {
          // rejection
          console.error(reason);
    });
    
    return dispatch({
      types: [
        LOGIN_USER_PENDING,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_ERROR,
      ],
      payload: {
        promise: loginPromise,
      },
    });
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
