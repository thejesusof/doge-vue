<template>
  <div id="app">
    <header>
      <router-link to="/"> Main </router-link>
      <router-link to="/favourites"> Favs </router-link>
      <select-breed></select-breed>
    </header>
    <router-view/>
  </div>
</template>

<script>
import SelectBreed from './components/SelectBreed'

export default {
  name: 'App',
  components: {
    SelectBreed
  },
  beforeCreate () {
    this.$store.dispatch('getBreeds')
    this.$store.dispatch('getLocalStorage')
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #313131;
}
header {
  padding: 20px;
  color: #fff;
  background: #313131;
}
a {
  text-decoration: none;
  color: #f7d0cb;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 20px;
}
</style>
