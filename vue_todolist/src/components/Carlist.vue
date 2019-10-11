<template>
<div>
    <h1>Car list</h1>
    <table>
        <tbody>
            <tr v-for="(car, index) in cars" v-bind:key="index">
                <td>{{car.brand}}</td>
                <td>{{car.model}}</td>
                <td>{{car.color}}</td>
                <td>{{car.year}}</td>
                <td>{{car.price}}</td>
                <td>{{car.fuel}}</td>
                <td>
                    <button v-on:click="deleteCar(car._links.car.href)">x</button>
                </td>
                </tr>
        </tbody>
    </table>
</div>
    
</template>

<script>
import axios from 'axios'; 

export default {
    name: 'CarList',
    data(){
        return {
            cars: []
        }
    },
    methods: {
        deleteCar(link) {
            fetch(link, {
                method: "DELETE"
            })
            .then(() => {
                axios.get('https://carstockrest.herokuapp.com/cars')
                .then(response => (this.cars = response.data._embedded.cars))
                console.log("deleted!!")
            })
        }
    },
    
    mounted() {
        axios.get('https://carstockrest.herokuapp.com/cars')
        .then(response => (this.cars = response.data._embedded.cars))
    },
        
    
    
    
}
</script>

<style scoped>
table {
    margin: auto;
    padding: auto;
}

</style>