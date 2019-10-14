<template>
<div>
    <!--<h1>Car list</h1>
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
    </table>-->
    <v-data-table 
    :headers="headers"
    :items="cars"
    :items-per-page="10"
    class="elevation-1">
    <template v-slot:item.action="{ item }">
        <v-btn
      color="primary"
      depressed
      @click="deleteCar(item._links.car.href)"
    >
      <v-icon left>{{ icons.mdiDelete }}</v-icon>
      Delete
    </v-btn>
      </template>
     
  </v-data-table>
  
</div>
</template>
 
<script>
import axios from 'axios'; 
import {
    mdiDelete,
  } from '@mdi/js'

export default {
    name: 'CarList',
    data(){
        return {
            icons: {
             mdiDelete,
          },
             cars: [],
             headers: [
          {
            text: 'Brand',
            align: 'left',
            sortable: false,
            value: 'brand',
          },
          { text: 'Model', value: 'model' },
          { text: 'Color', value: 'color' },
          { text: 'Year', value: 'year' },
          { text: 'Price', value: 'price' },
          { text: 'Fuel', value: 'fuel' },
          { text: 'Actions', value: 'action', sortable: false },
          ]
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