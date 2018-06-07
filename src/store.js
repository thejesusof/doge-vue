import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    url: 'https://dog.ceo/api',
    breeds: [],
    selectedBreeds: []
  },
  actions: {
    getBreeds () {
      axios.get(`${store.state.url}/breeds/list`).then(response => {
        const breeds = response.data.message
        breeds.forEach((breed) => {
          let breedData = {
            name: breed,
            img: null
          }
          axios.get(`${store.state.url}/breed/${breed}/images/random`).then(image => {
            breedData.img = image.data.message
            store.state.breeds.push(breedData)
          }).catch(imageError => {
            console.log(imageError)
          })
        })
      }).catch(error => {
        console.log(error)
      })
    },
    getSelectedBreed (breed) {
      axios.get(`${this.url}/breed/${breed}/images`).then(response => {
        store.state.selectedBreeds = response.data.message
      }).catch(error => {
        console.log(error)
      })
    }
  }
})

export default store
