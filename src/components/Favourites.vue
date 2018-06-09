<template>
  <section class="favourites">
    <div v-for="(breed, index) in favDogs" :key="index">
      <img v-bind:src="breed" alt="favourite breed">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Favourites',
  computed: {
    favDogs () {
      return this.$store.state.favDogs
    }
  }
}
</script>

<style>
</style>
