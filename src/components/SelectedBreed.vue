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

export default {
  name: 'SelectedBreed',
  components: {
    Fav
  },
  data () {
    return {
      dogsPerPage: 20,
      bottom: false
    }
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
  },
  methods: {
    showMore () {
      this.dogsPerPage = this.dogsPerPage + 20
      this.loadedBreeds.slice(0, this.dogsPerPage)
    },
    isBottomVisible () {
      let scrollY = window.scrollY
      let visible = document.documentElement.clientHeight
      let pageHeight = document.documentElement.scrollHeight
      let bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      this.bottom = this.isBottomVisible()
    })
  },
  watch: {
    bottom (bottom) {
      if (bottom) {
        this.showMore()
      }
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
