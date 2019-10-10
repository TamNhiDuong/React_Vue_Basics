<template>
<div>
    <table>
        <tbody>
            <tr v-for="(car, index) in cars" v-bind:key="index">
                
        </tbody>
    </table>
</div>
    
</template>

<script>
import axios from 'axios'; 

export default {
    name: 'Carlist',
    data(){
        return {
            cars: []
        }
    },
    mounted() {
        axios.get('https://carstockrest.herokuapp.com/cars')
        .then(response => (this.cars = response.data._embedded.cars))
    }
    
}
</script>

<style scoped>

</style>