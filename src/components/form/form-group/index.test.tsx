import { shallow, render } from 'enzyme';

import * as React from 'react';

import FormGroup from './index';

describe('Form Group Component', () => {
  it('should create a form group with its children and correct class', () => {
    const formGroup = shallow(<FormGroup>Hello World</FormGroup>);

    expect(formGroup.length).toBe(1);
    expect(formGroup.text()).toBe('Hello World');
    expect(formGroup.hasClass('py2')).toBe(true);
  });
});

