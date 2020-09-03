<template>
  <header class="header">
    <h1 class="header__title">Directorio de Usuarios</h1>
    <nav class="header__nav">
      <!-- 
        CON RouterLink ENLAZAMOS LAS RUTAS QUE ESTAN ALMACENADAS router/index.js PARA RENDERIZAR EL COMPONENTE CORRESPONDIENTE
       -->

       <!-- 
         TRABAJANDO RUTAS HACIENDO REFERENCIA AL path 

          <RouterLink class="header__nav__link" to="/">Directorio</RouterLink> |
          <RouterLink class="header__nav__link" to="/legal">Legal</RouterLink> |
          <RouterLink class="header__nav__link" to="/contacto">Contacto</RouterLink>
       -->

       <!-- TRABAJANDO CON RUTAS USANDO LA PROPIEDAD name EN  -->
      <RouterLink class="header__nav__link" :to="{name: 'Home'}">Directorio</RouterLink> |
      <RouterLink class="header__nav__link" :to="{name: 'Legal'}">Legal</RouterLink> |
      <RouterLink class="header__nav__link" :to="{name: 'Contacto'}">Contacto</RouterLink> |
      <!-- CON v/if VERIFICO SI EL USUARIO ESTA AUTENTIFICADO O NO PARA MOSTRAR EL ENLACE -->
      <RouterLink v-if="!auth" class="header__nav__link" :to="{name: 'Login'}"> Login </RouterLink> |
      <RouterLink v-if="auth" class="header__nav__link" :to="{name: 'Dashboard'}"> Dashboard </RouterLink>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Navegacion",
  computed:{
    ...mapState(['auth'])
  }
};
</script>

<style scoped lang="scss">
.header {
  text-align: center;
  padding: 1.5rem 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.9);
}
.header__title {
  color: goldenrod;
}
.header__nav {
  display: flex;
  justify-content: space-evenly;
}
.header__nav__link {
  text-decoration: none;
  color: white;
  padding: .6rem 0 0 0;
}

nav{
  
  .router-link-active,
  .router-link-exact-active{
    color: goldenrod;
    border-bottom: 1px solid goldenrod;
  }
  
}
</style>