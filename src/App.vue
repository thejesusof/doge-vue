<template>
  <div id="app">
    <header>
      <router-link to="/"> Main </router-link>
      <router-link to="/favourites"> Favorites ♥ </router-link>
      <select-breed></select-breed>
    </header>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
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
  margin-right: 30px;
}
.breeds {
  width: 100%;
  line-height: 0;
  -webkit-column-count: 4;
  -webkit-column-gap:   0px;
  -moz-column-count:    4;
  -moz-column-gap:      0px;
  column-count:         4;
  column-gap:           0px;
}
.doggy {
  width: 100%;
  margin: 5px;
  margin-top: 0;
  overflow: hidden;
  position: relative;
}
.doggy img {
  display: block;
  width: 100%;
  height: auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
