import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to ASL Learning</h1>
        <p>Start learning sign language in a fun and easy way!</p>
        <a
          className="App-link"
          href="/get-started" // Update this to your get started route
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </header>
    </div>
  );
}

export default App;

