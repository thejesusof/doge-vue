<template>
  <section class="breeds">
    <div v-for="(breed, index) in favDogs" :key="index" class="doggy">
      <img v-bind:src="breed" alt="favourite breed">
      <fav v-bind:img="breed"></fav>
    </div>
  </section>
</template>

<script>
import Fav from '@/components/Fav'

export default {
  name: 'Favourites',
  components: {
    Fav
  },
  computed: {
    favDogs () {
      return this.$store.state.favDogs
    }
  }
}
</script>

<style>
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
  overflow: hidden;
  position: relative;
}
.doggy img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
