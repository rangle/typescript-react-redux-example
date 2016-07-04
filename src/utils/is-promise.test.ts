import isPromise from './is-promise';

describe('isPromise', () => {
  it('should return true for an object that is a promise', () => {
    const promise = new Promise((resolve) => resolve(true));

    const payload = {
      promise,
    };

    expect(isPromise(payload)).toBe(true);
  });

  it('should return false for an object that is not a promise', () => {
    const badPayload1 = { hello: 'world' };
    const badPayload2 = ['hello', 'world'];
    const badPayload3 = 'hello world';
    const badPayload4 = 'hello world';

    expect(isPromise({ promise: badPayload1 })).toBe(false);
    expect(isPromise({ promise: badPayload2 })).toBe(false);
    expect(isPromise({ promise: badPayload3 })).toBe(false);
    expect(isPromise({ promise: badPayload4 })).toBe(false);
  });
});
