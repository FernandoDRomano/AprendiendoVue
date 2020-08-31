<template>
  <section class="user">
    <h2 class="user__name">{{ usuarioDatos.fullName }}</h2>
    <img
      :src="usuarioDatos.thumbnail"
      :ismap="usuarioDatos.fullName"
      class="user__picture"
    />
    <p>{{ usuarioDatos.email }}</p>

    <!-- 
        CON ESTE RouterLink DEFINO LA RUTA ANIDADA PARA /usuario/:username/info 
        AL ACTIVAR LA OPCIÓN DE props: true EN ESTA RUTA ANIDADA, ENTONCES PUEDO 
        PASARLE VARIOS PARAMETROS EN FORMA DE UN OBJETO
    -->

      <!-- TRABAJANDO CON EL path

          <RouterLink 
            :to="{
                  //PASO EL path A LA RUTA
                  path: `/usuario/${this.username}/info`, 
                  //PASO LOS PARAMETROS
                  params: {username: this.username}
                  }" 
            class="user__more">
            Mostras más Información del usuario ....
          </RouterLink>
    
     -->

     <!-- TRABAJANDO CON LA PROPIEDAD name -->
    <RouterLink 
      :to="{
            //PASO EL name DE ESTA RUTA EN VEZ DEL path
            name: 'UsuarioInfo', 
            //PASO LOS PARAMETROS
            params: {username: this.username}
            }" 
      class="user__more">
      Mostras más Información del usuario ....
    </RouterLink>

    <section class="user__other">

      <a 
         v-show="usuarioAnterior" 
         @click.prevent="cargarUsuarioAnterior" 
         href="#">Usuario Anterior
      </a> |
      
      <a 
         v-show="usuarioSiguiente" 
         @click.prevent="cargarUsuarioSiguiente" 
         href="#">Usuario Siguiente
      </a>
    
    </section>
    <!-- RouterView COMPONENTE QUE RENDERIZA LA INFORMACIÓN DEL USUARIO -->
    <RouterView></RouterView>

  </section>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "viewUsuario",
  /* 
    COMO QUEREMOS ACTUALIZAR LA RUTA DEBEMOS USAR EL METODO beforeRouteUpdate(to, from, next){} DONDE DENTRO DE LA FUNCIÓN
    LE INDICAMOS CUAL ES EL NUEVO VALOR DEL username QUE VIENE DESDE LA RUTA DESTINO A LA QUE ME DIRIJO
  */
  beforeRouteUpdate (to, from, next) {
    this.username = to.params.username;
    next();
  },
  data() {
    return {
      /* LA PROPIEDAD username SERA IGUAL AL VALOR DE LA RUTA DINAMICA DE CADA USUARIO, PARA ESTO OBTENGO EL VALOR
      DE LA RUTA DINAMICA UTILIZANDO  this.$route.params.username DONDE .username ES EL VALOR DE LA VARIABLE QUE BUSCO
      PERO PODRIA SER OTRA VARIABLE */
      username: this.$route.params.username
    };
  },
  methods:{
    /* 
      CARGO EL USUARIO SIGUIENTE MEDIANTE UNA NAVEGACIÓN PROGRAMATICA, ES DECIR QUE NO SE USA UN RouterLink
      PARA ENLAZAR LA RUTA, SINO QUE USO EL METODO push DEL ROUTER -> this.$router.push({}), COMO PARAMETRO LE DEBO PASAR
      EL path O name DE LA RUTA, Y LOS PARAMETROS SI ES QUE LOS NECESITA.

      EN ESTE CASO LA RUTA TIENE COMO path: /usuario/:username ASI QUE ESTA ESPERANDO QUE LE PASEN COMO PARAMETRO EL username

      this.$router.push({
        name: 'Usuario',
        params: { username: this.usuarioSiguiente.login.username }
      })

    */
    cargarUsuarioSiguiente(){
      this.$router.push({
        name: 'Usuario',
        params: { username: this.usuarioSiguiente.login.username }
      })
    },

    cargarUsuarioAnterior(){
      this.$router.push({
        name: 'Usuario',
        params: { username: this.usuarioAnterior.login.username }
      })
    }
  },
  computed: {
    /* TRAIGO LOS DATOS DEL STATE DE VUEX */
    ...mapState(["usuarios"]),
    /* OBTENGO LOS DATOS DEL USUARIO, BUSCANDOLO EN EL STATE DE VUEX, MEDIANTE EL USERNAME QUE ES PASADO COMO
    PARAMETRO DINAMICO DE LA RUTA */
    usuario() {
      return this.usuarios.find(usuario => usuario.login.username === this.username);
    },
    /* EN BASE AL USUARIO OBTENIDO, CARGO SU NOMBRE Y SU FOTO. 
    MENCIÓN ESPECIAL: this.usuario HACE REFERENCIA A LA PROPIEDAD COMPUTADA usuario() */
    usuarioDatos() {
      return {
        fullName: `${this.usuario.name.first} ${this.usuario.name.last}`,
        thumbnail: this.usuario.picture.large,
        email: this.usuario.email
      };
    },
    /* OBTENGO EL INDICE DEL USUARIO ACTUAL */
    usuarioIndex(){
      return this.usuarios.findIndex(usuario => usuario.login.username === this.username);
    },
    /* OBTENGO EL USUARIO SIGUIENTE A PARTIR DEL INDICE DEL USUARIO ACTUAL */
    usuarioSiguiente(){
      return this.usuarios[this.usuarioIndex + 1];
    },
    /* OBTENGO EL USUARIO ANTERIOR A PARTIR DEL INDICE DEL USUARIO ACTUAL */
    usuarioAnterior(){
      return this.usuarios[this.usuarioIndex - 1];
    }

  }
};
</script>

<style scoped>
.user {
  padding: 7rem 0.5rem;
  text-align: center;
}

.user__name{
  padding: .5rem 0;
}

.user__picture {
  border: 1px solid;
}

.user__more {
  display: block;
  margin-top: 1rem;
  color: black;
}
</style>