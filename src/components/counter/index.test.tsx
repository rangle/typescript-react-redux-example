import { shallow, render } from 'enzyme';

import * as React from 'react';

import Counter from './index';

describe('Counter Component', () => {
   const onIncrement = jasmine.createSpy('onIncrement');
   const onDecrement = jasmine.createSpy('onDecrement');

  it('should create a counter', () => {
    const counter = shallow(
      <Counter counter={5} increment={onIncrement} decrement= {onDecrement} />);

    expect(counter.length).toBe(1);
  });

  it('should create a counter with the correct default class', () => {
    const counter = shallow(
      <Counter counter={5} increment={onIncrement} decrement= {onDecrement} />);

    expect(counter.hasClass('flex')).toBe(true);
  });

  it('should create a counter with increment and decrement buttons', () => {
    const counter = render(<Counter counter={5} 
      increment={onIncrement} decrement= {onDecrement} />);

    const incrementButton = counter.find('#qa-increment-button');
    const decrementButton = counter.find('#qa-decrement-button');

    expect(incrementButton.length).toBe(1);
    expect(decrementButton.length).toBe(1);
  });

  it('should create a counter with the given starting counter value', () => {
    const counter = render(
      <Counter counter={5} increment={onIncrement} decrement={onDecrement} />);

    const counterDiv = counter.find('#qa-counter-div');

    expect(counterDiv.length).toBe(1);
    expect(counterDiv.text()).toBe('5');
  });

  it('should have buttons that call the correct function on click', () => {
    const counter = shallow(<Counter counter={5} 
      increment={onIncrement} decrement={onDecrement} />);

    const incrementButton = counter.find('#qa-increment-button');
    const decrementButton = counter.find('#qa-decrement-button');

    incrementButton.simulate('click');
    expect(onIncrement).toHaveBeenCalled();
    expect(onIncrement.calls.count()).toBe(1);

    decrementButton.simulate('click');
    expect(onDecrement).toHaveBeenCalled();
    expect(onDecrement.calls.count()).toBe(1);
  });
});

