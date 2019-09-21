import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'; 
const Carlist = () => {
const [cars, setCars] = useState([]);

useEffect(() => {
    fetchCars();
}, [])

const fetchCars = () => {
    fetch('https://carstockrest.herokuapp.com/cars')
    .then(response => response.json())
    .then(data => setCars(data._embedded.cars) )
}

const columns = [
    {
        Header: 'Brand',
        accessor: 'brand'
    },
    {
        Header: 'Model',
        accessor: 'model'
    },
    {
        Header: 'Color',
        accessor: 'color'
    },
    {
        Header: 'Fuel',
        accessor: 'fuel'
    },
    {
        Header: 'Year',
        accessor: 'year'
    },
    {
        Header: 'Price',
        accessor: 'price'
    }
]

return (
<div>
    <ReactTable 
    data={cars} 
    columns={columns} /> 
</div>
);
}
export default Carlist; 

