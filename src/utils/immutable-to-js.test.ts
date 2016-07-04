import { fromJS } from 'immutable';

import immutableToJS from './immutable-to-js';

describe('immutableToJS', () => {
  const mockState = {
    state: {
      name: 'John',
      sons: [{
        name: 'Lill John',
        age: 12,
      }, {
        name: 'Big John',
        age: 34,
      }],
    },
  };

  const stateWithImmutable = {
    state: fromJS(mockState.state),
  };

  it('should ignore regular JS structures', () => {
    expect(mockState).toEqual(immutableToJS(mockState));
  });

  it('should convert Immutable structures to JS structures', () => {
    expect(mockState).toEqual(immutableToJS(stateWithImmutable));
  });
});

