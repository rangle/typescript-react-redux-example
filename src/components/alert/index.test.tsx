import { shallow, render } from 'enzyme';

import * as React from 'react';

import Alert from './index';

describe('Alert Component', () => {
  it('should create an alert with the default classes', () => {
    const alert = shallow(<Alert>Loading...</Alert>);

    expect(alert).not.toBeNull();
    expect(alert.text()).toEqual('Loading...');
    expect(alert.hasClass('p2')).toBe(true);
    expect(alert.hasClass('bg-blue white')).toBe(true);
    expect(alert.hasClass('hide')).toBe(true);
    expect(alert.hasClass('block')).toBe(false);
  });

  it('should create an alert with the correct class for the isVisible value',
   () => {
    const alert = shallow(<Alert isVisible>Loading...</Alert>);

    expect(alert.hasClass('hide')).toBe(false);
    expect(alert.hasClass('block')).toBe(true);
  });

  it('should create an alert with the correct class for the given status value',
   () => {
    const alert = shallow(<Alert status={'error'}>Error</Alert>);

    expect(alert.hasClass('bg-red white')).toBe(true);
  });

  it('should create an alert with the given id value', () => {
    const alert = shallow(<Alert id={'This id'}>Loading...</Alert>);
    
    expect(alert.prop('id')).toEqual('This id');
  });
});
