<template>
  <section class="selected-breed">
    <div class="doggy" v-for="(breed, index) in selectedBreeds" :key="index">
      <img v-bind:src="breed" alt="selected breed">
      <fav v-bind:img="breed"></fav>
    </div>
  </section>
</template>

<script>
import Fav from '@/components/Fav'

export default {
  name: 'SelectedBreed',
  components: {
    Fav
  },
  computed: {
    selectedBreeds () {
      return this.$store.state.selectedBreedImgs
    }
  },
  beforeCreate () {
    this.$store.dispatch('getSelectedBreed', this.$route.params.name)
  }
}
</script>

<style>
.doggy {
  position: relative;
}
</style>
