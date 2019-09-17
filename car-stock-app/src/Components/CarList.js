import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from "@material-ui/core/Button";
import EditCar from "./EditCar"; 
import AddCar from "./AddCar";
import { CSVLink } from "react-csv";
import { Snackbar } from "@material-ui/core";
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {cars: [], message: ""};
    };
    
    componentDidMount() {
        this.listCars();
    }

    listCars = () => {
        fetch("https://carstockrest.herokuapp.com/cars")
        .then(response => response.json())
        .then(responsedata => this.setState({ cars: responsedata._embedded.cars }))
        .catch(err => console.log(err));
    }; 

    deleteCar = carLink => {
        fetch(carLink.original._links.self.href, { method: "DELETE" })
        .then(this.listCars())
        .catch(err=> console.error(err));
        console.log(carLink.original._links.self.href); 
    };

    updateCar = (link, updateCar) => {
        fetch(link, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateCar)
        })
        .then(res => this.loadCars())
        .then(res => this.setState({ open: true, message: "Update new car" }))
        .catch(err => console.log(err))
    };
  
    saveCar = car => {
        fetch("https://carstockrest.herokuapp.com/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(car)
        })
        .then(res => this.loadCars())
        .then(res => this.setState({ open: true, message: "Add new car"}))
        .catch(err => console.log(err)); 
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const columns = [
            { Header: "Brand", accessor: "brand"},
            { Header: "Model", accessor: "model"},
            { Header: "Color", accessor: "color"},
            { Header: "Fuel", accessor: "fuel"},
            { Header: "Year", accessor: "year"},
            { Header: "Price", accessor: "price"},
            { Header: "Remove", 
            accessor: "_links.self.href",
            filterble: "false",
            sortable: "false",
             Cell: value => (
                 <Button color="secondary" onClick={() => this.deleteCar(value)}>
                     Delete
                 </Button>
             )},
             {
                Header: "",
                accessor: "_links.self.href",
                filterable: "false",
                sortable: "false",
                width: 100,
                Cell: ({ value, row }) => (
                  <EditCar updateCar={this.updateCar} link={value} car={row} />
                )
              }
        ];
    return (
        <div>
        <AddCar saveCar={this.saveCar} />
        <CSVLink data={this.state.cars} separator={";"}>
            Download
        </CSVLink>
        <ReactTable
        data={this.state.cars}
        columns={columns}
        filterable={true}
        />
        <Snackbar
        anchorOrigin={{
            vertical:"bottom",
            horizontal: "left"
        }}

        open={this.state.open}
        autoHideDuration={3000}
        onClose={this.handleClose}
        ContentProps={{
            "aria-describedy": "message-id"
        }}
        message={this.state.message}
        />
        </div>
        
    );   

}
}