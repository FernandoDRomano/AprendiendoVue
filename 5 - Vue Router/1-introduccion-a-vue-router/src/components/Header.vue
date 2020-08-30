<template>
  <header class="header">
    <h1 class="header__title">Directorio de Usuarios</h1>
    <nav class="header__nav">
      <router-link class="header__nav__link" to="/">Directorio</router-link> |
      <router-link class="header__nav__link" to="/legal">Legal</router-link> |
      <router-link class="header__nav__link" to="/contacto">Contacto</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
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
}
</style>