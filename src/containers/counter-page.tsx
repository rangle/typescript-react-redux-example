import * as React from 'react';
const connect = require('react-redux').connect;

import { increment, decrement } from '../feature/counter';
import Counter from '../components/counter';
import Container from '../components/container';

interface ICounterPageProps extends React.Props<any> {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
};

function mapStateToProps(state) {
  return {
    counter: state.counter.get('count'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: (): void => dispatch(increment()),
    decreaseCounter: (): void  => dispatch(decrement()),
  };
}

class CounterPage extends React.Component<ICounterPageProps, void> {
  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;

    return <Container size={2} center>
      <h2 className="center caps" id="qa-counter-heading">Counter</h2>

      <Counter
        counter={ counter }
        increment={ increaseCounter }
        decrement={ decreaseCounter } />
    </Container>;
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
