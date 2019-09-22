import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from "./Square";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Square size={50} />
      <Square size={75} showTitle={true} initialColor="green"/>
      <Square size={100} showTitle={false} initialColor="orange"/>
    </div>
  );
}

export default App;
