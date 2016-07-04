import { shallow, render } from 'enzyme';

import * as React from 'react';

import Input from './index';

describe('Input Component', () => {
  it('should create an input with default class, type and placeholder', () => {
    const username = {};

    const wrapper = shallow(<Input fieldDefinition={username} />);
    const input = wrapper.find('input');

    expect(input.length).toBe(1);
    expect(input.hasClass('block col-12 mb1 input')).toBe(true);
    expect(input.prop('placeholder')).toBe('');
    expect(input.prop('type')).toBe('text');
    expect(input.prop('id')).toBe('');
  });

  it('should create an input with a custom id, type and placeholder', () => {
    const username = {};

    const wrapper = shallow(<Input fieldDefinition={username} id={'id-1'} 
     type={'password'} placeholder={'hello world'} />);
    const input = wrapper.find('input');
 
    expect(input.prop('id')).toBe('id-1'); 
    expect(input.prop('type')).toBe('password');
    expect(input.prop('placeholder')).toBe('hello world');
  });
});

