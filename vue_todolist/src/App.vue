<template>
<v-app>
  <v-AppBar app>
    <v-toolbar-title class="headline">
      <span>CARLIST</span>
      </v-toolbar-title>
      </v-AppBar>
      
      <v-content>
        <Carlist/>
        </v-content>
        </v-app>
        </template>

<script>

import Carlist from './components/Carlist';

export default {
  name: 'app',
  components: {
    Carlist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
