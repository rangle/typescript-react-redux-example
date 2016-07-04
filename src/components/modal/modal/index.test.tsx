import { shallow, render } from 'enzyme';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Modal from './index';

describe('Modal Component', () => {
  it('should create a modal that is hidden by default', () => {
    const wrapper = render(<Modal>Hello World</Modal>);
    const modal = wrapper.children();

    expect(modal.length).toBe(1);
    expect(modal.text()).toBe('Hello World');
    expect(modal.prop('style').visibility).toBe('hidden');
    expect(modal.prop('style').opacity).toBe('0');
  });

  it('should create a modal that is visibile', () => {
    const wrapper = render(<Modal isVisible>Hello World</Modal>);
    const modal = wrapper.children();
    
    expect(modal.prop('style').visibility).toBe('visible');
    expect(modal.prop('style').opacity).toBe('1');
  });
});

