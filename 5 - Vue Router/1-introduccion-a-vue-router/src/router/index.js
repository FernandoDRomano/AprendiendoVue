import Vue from 'vue'
import VueRouter from 'vue-router'
import viewUsuariosLista from '../views/viewUsuariosLista.vue'
import viewLegal from '@/views/viewLegal.vue'
import viewContacto from '@/views/viewContacto.vue'
import viewUsuario from '@/views/viewUsuario.vue'
import usuarioInfo from '@/components/UsuarioInfo.vue'
 

Vue.use(VueRouter)

  const routes = [
  /* 
    RUTA ESTATICA, CUANDO SE ENTRE A LA RUTA / SE VISUALIZA EL COMPONENTE viewUsuariosLista 
    QUE SE ENCARGAR DE RENDERIZAR EL RouterView
  */
  {
    path: '/',
    name: 'Home',
    component: viewUsuariosLista
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
    component: viewUsuario,
    /* RUTA ANIDADAS */
    children: [
      /* POR CADA RUTA ANIDADA RECIBE UN OBJETO */
      {
        /*
          PONGO EL path COMPLETO DE LA RUTA ANIDADA, DEBIDO A QUE PROBE PONIENDO SOLO path:'/info'
          Y SI FUNCIONA, PERO NO ME CONSERVA EL COMPONENTE PADRE QUE ES viewUsuario
        */
        path: '/usuario/:username/info',
        name: 'UsuarioInfo',
        component: usuarioInfo,
        /* CON props:true INDICAMOS QUE EN EL COMPONENTE QUE SE VA A RENDERIZAR PODEMOS RECIBIR PROPIEDADES */
        props: true
      }
    ]
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
