import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/contact/">Contact</Link>{' '}
          <Link to="/about/">About</Link>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;
