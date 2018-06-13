<template>
  <section class="breeds">
    <div class="doggy" v-for="(breed, index) in loadedBreeds" :key="index">
      <img v-bind:src="breed.img" alt="breed">
    </div>
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
.breeds {
  width: 100%;
  line-height: 0;
  -webkit-column-count: 4;
  -webkit-column-gap:   0px;
  -moz-column-count:    4;
  -moz-column-gap:      0px;
  column-count:         4;
  column-gap:           0px;
}
.doggy {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.doggy img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
