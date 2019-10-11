<template>
  <div id="app">
    <Carlist/>
  </div>
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
