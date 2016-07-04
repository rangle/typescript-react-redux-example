import { shallow, render } from 'enzyme';

import * as React from 'react';

import Logo from './index';

describe('Logo Component', () => {
  it('should create a logo', () => {
    const logo = shallow(<Logo />);
    expect(logo.length).toBe(1);
  });

  it('should create a logo with an image and default class and style', () => {
    const wrapper = render(<Logo />);
    const logo = wrapper.children();
    const img = logo.find('img');
 
    expect(logo.hasClass('flex items-center')).toBe(true);
    expect(img.length).toBe(1);
    expect(img.prop('style')).not.toBeNull();
    expect(img.prop('style').width).not.toBeNull();
    expect(img.prop('style').width).toBe('128px');
    expect(img.prop('alt')).toBe('Rangle.io');
  });
});

