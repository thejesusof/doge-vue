import Vue from 'vue'
import Router from 'vue-router'
import Breeds from '@/components/Breeds'
import Favourites from '@/components/Favourites'
import SelectedBreed from '@/components/SelectedBreed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Breeds',
      component: Breeds
    },
    {
      path: '/selected-breed',
      name: 'SelectedBreed',
      component: SelectedBreed
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites
    }
  ]
})
