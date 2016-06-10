/**
 * Used for testing to fire actions against a reducer.
 *
 * @param {Function} reducer Reducer to test
 * @param {Object} currentState The current state of the reducer
 * @param {String} type The action type to fire
 * @param {Object} payload The payload (optional) to fire
 * @return {Object} Updated state as a result of the action
 */
export default function fireAction(reducer, currentState, type, payload = {}) {
  return reducer(currentState, {
    type,
    payload,
  });
}
