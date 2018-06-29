import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">{new Date(Date.now()).toLocaleTimeString()}</h1>
      This shouldn't be reloaded each time.
    </header>
    <p className="App-intro">
      This also shouldn't be reloaded each time.
    </p>
  </div>
);

export default App;