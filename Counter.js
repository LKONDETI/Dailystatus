// Counter.js

import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, addValue, setValue } from './actions';

const Counter = (props) => {
  const { count, increment, decrement, addValue, setValue } = props;

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  const handleAddValue = () => {
    const value = parseInt(prompt('Enter a value to add:'));
    if (!isNaN(value)) {
      addValue(value);
    }
  };

  const handleSetValue = () => {
    const value = parseInt(prompt('Enter a new value:'));
    if (!isNaN(value)) {
      setValue(value);
    }
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleAddValue}>Add Value</button>
      <button onClick={handleSetValue}>Set Value</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps, { increment, decrement, addValue, setValue })(Counter);
