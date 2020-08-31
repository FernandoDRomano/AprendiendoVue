<template>
  <section class="user">
    <h2 class="user__name">{{ usuarioDatos.fullName }}</h2>
    <img
      :src="usuarioDatos.thumbnail"
      :ismap="usuarioDatos.fullName"
      class="user__picture"
    />
  </section>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Usuario",
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
        thumbnail: this.usuario.picture.large
      };
    }
  }
};
</script>

<style scoped>
.user {
  position: fixed;
  width: 30rem;
  left: calc(50vw - 15rem);
  top: 20vmin;
  z-index: 1;
  background-color: lightgray;
  border: 3px solid gray;
  padding: 1rem;
  text-align: center;
  box-shadow: 2px 1px 20px black;
}
.user__name {
  margin-top: 0;
}
.user__picture {
  border: 1px solid;
}
.close {
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>