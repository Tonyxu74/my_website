import React from 'react'
import Home from "./scenes/Home.js"
import Experiences from "./scenes/Experiences.js"
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom"

function App() {
  return (
    <Router>
      <Route exact path="/experiences/" component={Experiences} />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
