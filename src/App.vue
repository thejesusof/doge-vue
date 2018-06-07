<template>
  <div id="app">
    <breeds></breeds>
  </div>
</template>

<script>
import Breeds from './components/Breeds'

export default {
  name: 'App',
  components: {
    Breeds
  },
  beforeCreate () {
    this.$store.dispatch('getBreeds')
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
