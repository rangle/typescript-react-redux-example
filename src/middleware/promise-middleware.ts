declare var require: any;

import isPromise from '../utils/is-promise';
const objectAssign = require('object-assign');


export default function promiseMiddleware({ dispatch }) {
  return next => action => {
    if (!isPromise(action.payload)) {
      return next(action);
    }

    const { types, payload, meta } = action;
    const { promise, data } = payload;
    const [ PENDING, FULFILLED, REJECTED ] = types;

   /**
    * Dispatch the pending action
    */
    dispatch( objectAssign({},
      { type: PENDING },
      data ? { payload: data } : {},
      meta ? { meta } : {}
    ));

    /**
     * If successful, dispatch the fulfilled action, otherwise dispatch
     * rejected action.
     */
    return promise.then(
      result => {
        dispatch({
          type: FULFILLED,
          payload: result,
          meta,
        });
      },
      error => {
        dispatch({
          type: REJECTED,
          payload: error,
          meta,
        });
      }
    );
  };
}
