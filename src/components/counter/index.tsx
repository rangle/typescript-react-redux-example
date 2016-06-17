import * as React from 'react';

import Button from '../button';

interface ICounterProps extends React.Props<any> {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

export default function Counter({
  counter,
  increment,
  decrement
}: ICounterProps) {
  return (
    <div className="flex">
      <Button
        testid="counter-decrementButton"
        id="qa-decrement-button"
        className="bg-black col-2"
        onClick={decrement}>
        -
      </Button>

      <div
        data-testid="counter-result"
        id="qa-counter-div"
        className="flex-auto center h1">
        {counter}
      </div>

      <Button
        testid="counter-incrementButton"
        id="qa-increment-button"
        className="col-2"
        onClick={increment}>
        +
      </Button>
    </div>
  );
}
