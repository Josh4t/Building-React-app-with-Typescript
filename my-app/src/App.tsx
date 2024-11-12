import './App.css';
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Greeting name="John" />
      <Counter />
    </div>
  );
}

export default App;

