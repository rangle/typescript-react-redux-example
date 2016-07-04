import { shallow, render } from 'enzyme';

import * as React from 'react';

import FormLabel from './index';

describe('Form label Component', () => {
  it('should render a form label with its children and default id', () => {
    const formLabel = shallow(<FormLabel>Hello World</FormLabel>);

    expect(formLabel.length).toBe(1);
    expect(formLabel.text()).toBe('Hello World');
    expect(formLabel.prop('id')).toBe('');
  });

  it('should render a form label with given id', () => {
    const formLabel = shallow(<FormLabel id={'form-id'}/>);

    expect(formLabel.prop('id')).toBe('form-id');
  });
});

