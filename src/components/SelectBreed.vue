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
  background: #f7d0cb url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0xMjEuMywzNC42Yy0xLjYtMS42LTQuMi0xLjYtNS44LDBsLTUxLDUxLjEtNTEuMS01MS4xYy0xLjYtMS42LTQuMi0xLjYtNS44LDAtMS42LDEuNi0xLjYsNC4yIDAsNS44bDUzLjksNTMuOWMwLjgsMC44IDEuOCwxLjIgMi45LDEuMiAxLDAgMi4xLTAuNCAyLjktMS4ybDUzLjktNTMuOWMxLjctMS42IDEuNy00LjIgMC4xLTUuOHoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+Cjwvc3ZnPgo=) no-repeat;
  background-position: 95% 55%;
  -webkit-appearance: none;
}
</style>
