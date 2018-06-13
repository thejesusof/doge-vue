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
select {
  outline: none;
  padding: 6px 15px;
  color: #313131;
  font-size: 16px;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  background: #f9fafc url("http://i62.tinypic.com/15xvbd5.png") no-repeat;
  background-position: 95% 0;
  -webkit-appearance: none;
}
</style>
