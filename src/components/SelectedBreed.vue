<template>
  <section class="breeds">
    <transition-group name="dogs">
      <div class="doggy" v-for="(breed, index) in loadedBreeds" :key="index">
        <img v-bind:src="breed" alt="selected breed">
        <fav v-bind:img="breed"></fav>
      </div>
    </transition-group>
  </section>
</template>

<script>
import Fav from '@/components/Fav'
import { loadMore } from './mixins/loadMore'

export default {
  name: 'SelectedBreed',
  mixins: [loadMore],
  components: {
    Fav
  },
  computed: {
    selectedBreeds () {
      return this.$store.state.selectedBreedImgs
    },
    loadedBreeds () {
      return this.selectedBreeds.slice(0, this.dogsPerPage)
    }
  },
  beforeCreate () {
    this.$store.dispatch('getSelectedBreed', this.$route.params.name)
  }
}
</script>

<style>
.dogs-enter-active, .dogs-leave-active {
  transition: opacity 0.5s;
}
.dogs-enter, .dogs-leave-to {
  opacity: 0;
}
</style>
