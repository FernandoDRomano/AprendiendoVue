<template>
  <div id="app">
    <Navegacion></Navegacion>
    <ProductosLista></ProductosLista>
  </div>
</template>

<script>
  import ProductosLista from '@/components/ProductosLista.vue'
  import Navegacion from '@/components/Navegacion.vue'

  export default {
    name: 'App',
    components: {
      Navegacion,
      ProductosLista
    }
  }
</script>

<style lang="scss">
  body{
    background-color: #EDEDED;
    margin: 0;
  }
</style>
