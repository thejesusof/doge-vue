<template>
  <select class="">
    <option value="">Gimme doge!</option>
    <option v-for="(breed, index) in allBreeds" :key="index"> {{breed.name}} </option>
  </select>
</template>

<script>
export default {
  name: 'SelectBreed',
  computed: {
    allBreeds () {
      return this.$store.state.breeds
    }
  }
}
</script>

<style>
</style>
