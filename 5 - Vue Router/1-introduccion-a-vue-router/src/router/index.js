import Vue from 'vue'
import VueRouter from 'vue-router'
import viewUsuarios from '../views/viewUsuariosLista.vue'
import viewLegal from '@/views/viewLegal.vue'
import viewContacto from '@/views/viewContacto.vue'
 

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: viewUsuarios
  },
  {
    path: '/legal',
    name: 'Legal',
    component: viewLegal
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: viewContacto
  }
  //{
    //path: '/about',
    //name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
