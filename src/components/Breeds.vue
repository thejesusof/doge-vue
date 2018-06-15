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
export default {
  name: 'Breeds',
  data () {
    return {
      dogsPerPage: 20,
      bottom: false
    }
  },
  computed: {
    allBreeds () {
      return this.$store.state.breeds
    },
    loadedBreeds () {
      return this.allBreeds.slice(0, this.dogsPerPage)
    }
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
