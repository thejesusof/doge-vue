<template>
  <div class="like" @click="setFavDog(img)"></div>
</template>

<script>
export default {
  name: 'Fav',
  props: ['img'],
  computed: {
    favDogs () {
      return this.$store.state.favDogs
    }
  },
  methods: {
    setFavDog (img) {
      if (!this.favDogs.includes(img)) {
        this.$store.dispatch('setFavDog', img)
      } else {
        this.$store.dispatch('unFavDog', img)
      }
    }
  },
  watch: {
    favDogs: {
      handler () {
        this.$store.dispatch('setLocalStorage')
      }
    }
  }
}
</script>

<style>
.like {
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: red;
}
</style>
