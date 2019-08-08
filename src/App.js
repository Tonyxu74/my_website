import React from 'react';
import './App.css';
import Line from "./Lines.js";
import Ship from "./Ship.js";

function App() {
  return (
    <div className="App">
      <div className="ship-container">
        <Ship/>
      </div>
      <Line />
    </div>
  );
}

export default App;
