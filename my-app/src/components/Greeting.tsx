import React from 'react';

// Step 1: Define the interface for props
interface GreetingProps {
  name: string; // Ensure that `name` is typed as a string
}

// Step 2: Create the component using the defined interface
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Step 3: Export the component
export default Greeting;
