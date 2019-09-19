import React from 'react';
import './App.css';
import { BrowserRouter as BrowserRouter, Route, Switch } from "react-router-dom"; 
import Navigator from './Navigator';
import"bootstrap/dist/css/bootstrap.min.css";

function Index() {
  return <h2>This is Home Page</h2>;
}
function About() {
  return <h2>This is About Page</h2>;
}
function Contact() {
  return <h2>This is Contact Address Page</h2>; 
}
function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to React Router</header>
  <BrowserRouter>
    <div>
      <Navigator />

      <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route render={() => <h1>Page not found</h1>} />
      </Switch>
      
    </div>
  </BrowserRouter>
  </div>
  );
}

export default App;
