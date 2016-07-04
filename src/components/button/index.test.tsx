import { shallow, render } from 'enzyme';

import * as React from 'react';

import Button from './index';

describe('Button Component', () => {
  it('should create a button with a default type and classes', () => {
    const wrapper = shallow(<Button>OK</Button>);
    const button = wrapper.find('button');

    expect(button.length).toBe(1);
    expect(button.text()).toBe('OK');
    expect(button.prop('type')).toBe('button');
    expect(button.hasClass('btn-primary')).toBe(true);
  });

  it('should allow for a custom css class in addition to the default', () => {
    const wrapper = render(<Button className="bg-green">OK</Button>);
    const button = wrapper.find('button');

    expect(button.hasClass('bg-green')).toBe(true);
    expect(button.hasClass('btn-primary')).toBe(true);
  });

  it('should create a submit button', () => {
    const wrapper = shallow(<Button type="submit">Submit</Button>);
    const button = wrapper.find('button');

    expect(button.prop('type')).toBe('submit');
  });

  it('should respond to click events', () => {
    const onButtonClick = jasmine.createSpy('onButtonClick');

    const wrapper = shallow(<Button onClick={onButtonClick} />);

    wrapper.simulate('click');

    expect(onButtonClick).toHaveBeenCalled();
    expect(onButtonClick.calls.count()).toBe(1);
  });

});
