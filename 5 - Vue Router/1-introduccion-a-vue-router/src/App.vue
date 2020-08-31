<template>
  <div id="app">
    <Navegacion/>
    <!-- 
      RouterView ES EL ENCARGADO DE RENDERIZAR EL COMPONENTE ADECUADO SEGUN LA RUTA SELECCIONADO EN LOS
      RouterLink QUE SE ENCUENTRAN DENTRO DEL COMPONENTE DE Navegacion 
    -->
    <RouterView/>
  </div>
</template>

<script>
  import Header from '@/components/Navegacion.vue'
  export default {
      name: 'AppVuePrincipal',
      components: {
        Navegacion
      }
  }
</script>

<style lang="scss">
  *{
    margin: 0;
  }
</style>
