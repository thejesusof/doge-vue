<template>
  <section class="breeds">
    <transition-group name="dogs">
      <div class="doggy" v-for="(breed, index) in loadedBreeds" :key="index">
        <img v-bind:src="breed.img" alt="breed">
      </div>
    </transition-group>
  </section>
</template>

<script>
import { loadMore } from './mixins/loadMore'

export default {
  name: 'Breeds',
  mixins: [loadMore],
  computed: {
    allBreeds () {
      return this.$store.state.breeds
    },
    loadedBreeds () {
      return this.allBreeds.slice(0, this.dogsPerPage)
    }
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
