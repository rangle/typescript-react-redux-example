import { login } from '../../api/auth/';
import { fromJS } from 'immutable';

export const LOGIN_USER_PENDING = 'App/LOGIN_USER_PENDING';
export const LOGIN_USER_SUCCESS = 'App/LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'App/LOGIN_USER_ERROR';
export const LOGOUT_USER = 'App/LOGOUT_USER';

export const FORM_RESET = 'redux-form/RESET';

export function loginUser() {
  return (dispatch, getState) => {
    const user = {
      username: getState().form.login.username.value,
      password: getState().form.login.password.value,
    };

    return dispatch({
      types: [
        LOGIN_USER_PENDING,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_ERROR,
      ],
      payload: {
        promise: login(user)
          .then((res) => {
            dispatch({
              type: FORM_RESET,
              form: 'login',
            });
            return res;
          }),
      },
    });
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}




const INITIAL_STATE = fromJS({
  token: null,
  user: {},
  hasError: false,
  isLoading: false,
});

function sessionReducer(state = INITIAL_STATE,
                        action = { type: '', payload: null }) {
  switch (action.type) {

  case LOGIN_USER_PENDING:
    return state.merge(fromJS({
      token: null,
      user: {},
      hasError: false,
      isLoading: true,
    }));

  case LOGIN_USER_SUCCESS:
    return state.merge(fromJS({
      token: action.payload.token,
      user: action.payload.profile,
      hasError: false,
      isLoading: false,
    }));

  case LOGIN_USER_ERROR:
    return state.merge(fromJS({
      hasError: true,
      isLoading: false,
    }));

  case LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
}

export default sessionReducer;
