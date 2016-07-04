import { shallow, render } from 'enzyme';

import * as React from 'react';

import Navigator from './index';

describe('Navigator Component', () => {
  it('should create a navigator', () => {
    const wrapper = shallow(<Navigator />);
    const navigator = wrapper.find('nav');
 
    expect(navigator.length).toBe(1);
  });

  it('should create a navigator with the default classes', () => {
    const wrapper = shallow(<Navigator />);
    const navigator = wrapper.find('nav');
    expect(navigator.hasClass('flex')).toBe(true);
    expect(navigator.hasClass('items-center')).toBe(true);
    expect(navigator.hasClass('p1')).toBe(true);
    expect(navigator.hasClass('bg-white')).toBe(true);
    expect(navigator.hasClass('border-bottom')).toBe(true);
  });

  it('should render a navigator with children correctly rendered', () => {
    const wrapper = render(<Navigator>Hello World</Navigator>);
    const navigator = wrapper.find('nav');
    expect(navigator.text()).toBe('Hello World');
  });
});

