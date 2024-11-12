import React, { Component } from 'react';

// Step 1: Define interfaces for `props` and `state`
interface CounterProps {
  // No props for now, so keep it empty
}

interface CounterState {
  count: number; // Ensure `count` is typed as a number
}

// Step 2: Create the class component with type parameters
class Counter extends Component<CounterProps, CounterState> {
  // Step 3: Initialize state with type annotations
  state: CounterState = {
    count: 0, // Initial value
  };

  // Step 4: Define the increment method with type inference
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 5: Implement the render method
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Step 6: Export the component
export default Counter;
