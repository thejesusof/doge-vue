<template>
  <select v-on:change="getSelectedBreed($event.target.value)">
    <option value="/">Gimme doge!</option>
    <option v-for="(breed, index) in allBreeds" :key="index" :value="breed.name"> {{ breed.name }} </option>
  </select>
</template>

<script>
export default {
  name: 'SelectBreed',
  computed: {
    allBreeds () {
      return this.$store.state.breeds
    }
  },
  methods: {
    getSelectedBreed (breed) {
      if (breed === '/') {
        this.$router.push('/')
        return
      }
      this.$store.dispatch('getSelectedBreed', breed)
      this.$router.push({ path: `/${breed}` })
    }
  }
}
</script>

<style>
</style>
