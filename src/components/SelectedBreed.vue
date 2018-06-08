<template>
  <section class="selected-breed">
    <div class="selected-breed" v-for="(breed, index) in selectedBreeds" :key="index">
      <img v-bind:src="breed" alt="selected breed">
    </div>
  </section>
</template>

<script>
export default {
  name: 'SelectBreed',
  computed: {
    selectedBreeds () {
      return this.$store.state.selectedBreedImgs
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
