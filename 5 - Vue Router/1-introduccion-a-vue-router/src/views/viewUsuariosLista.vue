<template>
  <main>

    <article class="users">
      <!-- RENDERIZO LOS USUARIOS TRAIDOS DESDE VUEX -->
      <section v-for="(usuario, $index) in usuarios" :key="usuario.login.uuid" class="users__item">
        
        <!-- CREO LAS RUTAS DE MANERA DINAMICA PARA MOSTRAR LA INFORMACIÓN DE CADA USUARIO -->
        <RouterLink :to="`/usuario/${usuario.login.username}`">

          <div class="fade">
            {{ fullName($index) }}
          </div>
          <img
            class="user__thumbnail"
            :src="usuario.picture.medium"
            :alt="usuario.name.first"
          />

        </RouterLink>

      </section>
    </article>

  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "viewUsuariosLista",

  computed: {
    /* CREO UNA PROPIEDAD COMPUTADA PARA ACCEDER A LOS USUARIOS DESDE VUEX */
    ...mapState(["usuarios"])
  },
  methods: {
    /* COMO EN CADA INSTANCIA DEL USUARIO LE PASO EL INDICE, ENTONCES PUEDO BUSCAR EL USUARIO 
    EN VUEX Y TRAER TODOS SUS DATOS */
    fullName(index) {
      const usuario = this.usuarios[index];
      return `${usuario.name.first} ${usuario.name.last}`;
    }
  },

};
</script>

<style scoped>
.users {
  padding-top: 7.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid:
    repeat(auto-fill, minmax(10rem, 1fr))
    / repeat(auto-fill, minmax(10rem, 1fr));
  grid-auto-rows: minmax(10rem, 1fr);
}
.user__thumbnail {
  width: 100%;
  display: block;
  height: auto;
}
.users__item {
  position: relative;
  cursor: pointer;
}
.fade {
  position: absolute;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}
.users__item:hover .fade {
  opacity: 1;
  visibility: visible;
}
</style>