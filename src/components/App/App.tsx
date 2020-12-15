import React from 'react';
import './App.css';
import TestComponent from '../TestComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;