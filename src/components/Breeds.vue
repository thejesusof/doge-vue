<template>
  <section class="breeds">
    <div class="breed" v-for="(breed, index) in allBreeds" :key="index">
      <img v-bind:src="breed.img" alt="breed">
      <span> {{ breed.name }} </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Breeds',
  computed: {
    allBreeds () {
      return this.$store.state.breeds
    }
  }
}
</script>

<style>
.breeds {
  width: 100%;
}
</style>
