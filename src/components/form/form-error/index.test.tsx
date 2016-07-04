import { shallow, render } from 'enzyme';

import * as React from 'react';

import FormError from './index';

describe('Form Error Component', () => {
  it('should create a form error with its children, classes and id', () => {
    const formError = shallow(<FormError isVisible>Hello World</FormError>);

    expect(formError.length).toBe(1);
    expect(formError.text()).toBe('Hello World');
    expect(formError.prop('id')).toBe('');
    expect(formError.hasClass('bold black')).toBe(true);
    expect(formError.hasClass('hide')).toBe(false);
  });

  it('should create a hidden form error when isVisible is false', () => {
    const formError = shallow(<FormError isVisible={false} />);

    expect(formError.hasClass('hide')).toBe(true);
  });

  it('should create a form error with the given id', () => {
    const formError = shallow(<FormError isVisible id={'form-error-id'} />);

    expect(formError.prop('id')).toBe('form-error-id');
  });
});

