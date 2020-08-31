import Vue from 'vue'
import VueRouter from 'vue-router'
import viewUsuarios from '../views/viewUsuariosLista.vue'
import viewLegal from '@/views/viewLegal.vue'
import viewContacto from '@/views/viewContacto.vue'
import usuario from '@/components/Usuario.vue'
 

Vue.use(VueRouter)

  const routes = [
  /* 
    RUTA ESTATICA, CUANDO SE ENTRE A LA RUTA / SE VISUALIZA EL COMPONENTE viewUsuarios 
    QUE SE ENCARGAR DE RENDERIZAR EL RouterView
  */
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
  },
  /* 
    RUTA DINAMICA, CON EL :username INDICAMOS QUE ESTAMOS ESPERANDO UN VALOR DINAMICO 
  */
  {
    path: '/usuario/:username',
    name: 'Usuario',
    component: usuario
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
