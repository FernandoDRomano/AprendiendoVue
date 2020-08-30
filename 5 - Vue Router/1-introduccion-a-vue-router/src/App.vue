<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  export default {
      name: 'AppVuePrincipal',
      components: {
        Header
      }
  }
</script>

<style lang="scss">
  *{
    margin: 0;
  }
</style>
