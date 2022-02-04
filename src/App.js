import React from 'react';
import './App.css';
import Counter from './component/Counter';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
      <Todo/>
      <Counter name = "Counter"/>
    </div>
  );
}

export default App;
