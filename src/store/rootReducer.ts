import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;
import counter from '../feature/counter';
import session from '../feature/session';

const rootReducer = combineReducers({
  session,
  counter,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
