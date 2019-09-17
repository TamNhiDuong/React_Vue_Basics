import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  

  addTodo = (event) => {
    event.preventDefault();
    //const strDate = this.state.date.getDate() + "." + (this.state.date.getMonth()+1) + "." + this.state.date.getFullYear(); 
    const newTodo = {description: this.state.description, date: this.state.date};
    this.setState({
    todos: [...this.state.todos, newTodo]
    });
    }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>

            <TextField 
            name="description" 
            type="text"
            placeholder="Description"
            onChange={this.inputChanged}
            value={this.state.description}/>
            <br></br>

            <TextField 
            name="date" 
            placeholder="Duedate" 
            type="date"
            onChange={this.inputChanged} 
            value={this.state.date}/>
            <br></br>
            <Button 
          variant="contained" 
          color="primary"
          type="submit"
          value="Add">Add</Button>
          </form>
        </div>
        <div>

        <Table selectable={false}>
         <TableHead>
           <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {this.state.todos.map((item, index) =>
           <TableRow key={index}>
               <TableCell>{item.date}</TableCell>
               <TableCell>{item.description}</TableCell>
           </TableRow>)}
         </TableBody>
         </Table>
        </div>          
      </div>    
    );
    
  }
}

export default App;