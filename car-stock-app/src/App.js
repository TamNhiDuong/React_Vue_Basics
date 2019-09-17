import React, { Component } from 'react';
import './App.css';
import CarList from "./Components/CarList"; 
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography varian="h6" color="inherit">
              CarList
            </Typography>
          </Toolbar>
        </AppBar>
      <CarList/>
      </div>

    ); 
  }
}

export default App;
