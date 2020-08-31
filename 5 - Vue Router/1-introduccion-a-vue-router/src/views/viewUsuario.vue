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

    <!-- RouterView COMPONENTE QUE RENDERIZA LA INFORMACIÓN DEL USUARIO -->
    <RouterView></RouterView>

  </section>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "viewUsuario",
  data() {
    return {
      /* LA PROPIEDAD username SERA IGUAL AL VALOR DE LA RUTA DINAMICA DE CADA USUARIO, PARA ESTO OBTENGO EL VALOR
      DE LA RUTA DINAMICA UTILIZANDO  this.$route.params.username DONDE .username ES EL VALOR DE LA VARIABLE QUE BUSCO
      PERO PODRIA SER OTRA VARIABLE */
      username: this.$route.params.username
    };
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