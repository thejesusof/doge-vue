<template>
  <section class="breeds">
    <transition-group name="dogs">
      <div v-for="(breed, index) in loadedBreeds" :key="index" class="doggy">
        <div class="content">
          <img v-bind:src="breed" alt="favourite breed">
          <fav v-bind:img="breed"></fav>
        </div>
      </div>
    </transition-group>
  </section>
</template>

<script>
import Fav from '@/components/Fav'
import { loadMore } from './mixins/loadMore'

export default {
  name: 'Favourites',
  mixins: [loadMore],
  components: {
    Fav
  },
  data () {
    return {
      fav: Fav.isFav
    }
  },
  computed: {
    favDogs () {
      return this.$store.state.favDogs
    },
    loadedBreeds () {
      return this.favDogs.slice(0, this.dogsPerPage)
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
