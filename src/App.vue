<template>
  <div id="app">
    <header>
      <router-link to="/">Главная</router-link>
      <router-link to="/favourites">Избранное</router-link>
      <select-breed></select-breed>
    </header>
    <router-view/>
  </div>
</template>

<script>
import SelectBreed from './components/SelectBreed'
import Breeds from './components/Breeds'

export default {
  name: 'App',
  components: {
    SelectBreed,
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
