import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Om from '../views/About.vue'
import Galleri from '../views/Galleri.vue'
import Kontakt from '../views/Kontakt.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Om',
    name: 'Om',
    component: Om
  },
  {
    path: '/Galleri',
    name: 'Galleri',
    component: Galleri
  },
  {
    path: '/Kontakt',
    name: 'Kontakt',
    component: Kontakt
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
