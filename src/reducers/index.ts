import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import session from './session';


const rootReducer = combineReducers({
  session,
  counter,
  routing: routerReducer,
  form: formReducer,
});


export default rootReducer;
