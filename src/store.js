import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    url: 'https://dog.ceo/api',
    breeds: [],
    selectedBreedImgs: [],
    favDogs: []
  },
  actions: {
    getBreeds ({ state }) {
      axios.get(`${state.url}/breeds/list`).then(response => {
        const breeds = response.data.message
        breeds.forEach((breed) => {
          let breedData = {
            name: breed,
            img: null
          }
          axios.get(`${state.url}/breed/${breed}/images/random`).then(image => {
            breedData.img = image.data.message
            state.breeds.push(breedData)
          }).catch(imageError => {
            console.log(imageError)
          })
        })
      }).catch(error => {
        console.log(error)
      })
    },
    getSelectedBreed (name, breed) {
      axios.get(`${store.state.url}/breed/${breed}/images`).then(response => {
        store.state.selectedBreedImgs = response.data.message
      }).catch(error => {
        console.log(error)
      })
    },
    setFavDog (name, dog) {
      store.state.favDogs.push(dog)
    },
    unFavDog (name, dog) {
      let index = store.state.favDogs.indexOf(dog)
      store.state.favDogs.splice(index, 1)
    },
    getLocalStorage ({ state }) {
      let storage = localStorage.getItem('favs')
      if (storage) {
        state.favDogs = JSON.parse(storage)
      }
    },
    setLocalStorage ({ state }) {
      localStorage.setItem('favs', JSON.stringify(state.favDogs))
    }
  }
})

export default store
