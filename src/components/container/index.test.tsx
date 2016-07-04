import { shallow, render } from 'enzyme';

import * as React from 'react';

import Container from './index';

describe('Container Component', () => {
  it('should create a container', () => {
    const container = shallow(
      <Container size={1} center>Hello World</Container>);

    expect(container.length).toBeGreaterThan(0);
    expect(container.text()).toBe('Hello World');
  });

  it('should create a container with the correct class for the given size',
    () => {
    const container = shallow(<Container size={4} center />);
    expect(container.hasClass('max-width-4')).toBe(true);
    expect(container.hasClass('max-width-1')).toBe(false);
  });

  it('should create a container withthe mx-auto class when center is true',
    () => {
    const container = shallow( <Container size={1} center />);
    expect(container.hasClass('mx-auto')).toBe(true);
  });

  it('should create a container without the mx-auto class when center is false',
  () => {
    const container = shallow( <Container size={1} center={false} />);
    expect(container.hasClass('mx-auto')).toBe(false);
  });
});
