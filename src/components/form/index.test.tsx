import { shallow, render } from 'enzyme';

import * as React from 'react';

import Form from './index';

describe('Form Component', () => {
  it('should render a form with its children', () => {
    const onSubmit = jasmine.createSpy('onSubmit');
    const wrapper = render(<Form handleSubmit={onSubmit}>Hello World</Form>);
    const form = wrapper.find('form');

    expect(form.length).toBe(1);
    expect(form.text()).toBe('Hello World');
  });

  it('should respond to submit events', () => {
    const onSubmit = jasmine.createSpy('onSubmit');
    const eventStub = { preventDefault: () => {} };
    const wrapper = shallow(<Form handleSubmit={onSubmit} />);
    const form = wrapper.find('form');

    form.simulate('submit', eventStub);
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.calls.count()).toBe(1);
  });
});

