import { shallow, render } from 'enzyme';

import * as React from 'react';

import Content from './index';

describe('Content Component', () => {
  it('should create a <main> div', () => {
    const wrapper = shallow(<Content isVisible />);
    const main = wrapper.find('main');

    expect(main.length).toBeGreaterThan(0);
  });

  it('should create a <main> div with children', () => {
    const wrapper = render(<Content isVisible>Hello World</Content>);

    const main = wrapper.find('main');

    expect(main.children().length).toBe(0);
    expect(main.text()).toBe('Hello World');
  });

  it('should create a <main> div without children', () => {
    const wrapper = render(<Content isVisible={false}>Hello World</Content>);

    const main = wrapper.find('main');

    expect(main.text().length).toBe(0);
  });
});
