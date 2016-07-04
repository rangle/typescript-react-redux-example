import { shallow, render } from 'enzyme';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ModalContent from './index';

describe('Modal Content Component', () => {
  it('should create modal content with default classes', () => {
    const modalContent = shallow(<ModalContent>Hello World</ModalContent>);

    expect(modalContent.length).toBe(1);
    expect(modalContent.text()).toBe('Hello World');
    expect(modalContent.hasClass('p2 z2 bg-white relative')).toBe(true);
  });
});

