<template>
    <article>
      <h1>Bienvenido a Vuex</h1>
      <TareaEntry></TareaEntry>
      <section class="contenedorDeListas">
          <TareaList></TareaList>
          <TareaFiltradas></TareaFiltradas>
      </section>
    </article>
</template>

<script>
  import TareaEntry from '@/components/TareaEntry.vue'
  import TareaList from '@/components/TareaList.vue'
  import TareaFiltradas from '@/components/TareaFiltradas.vue'

  export default {
    name: 'App',
    components:{
      TareaEntry,
      TareaList,
      TareaFiltradas
    }
  }
</script>

<style lang="scss">

  article {
    h1{
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #33A39F;
      margin-top: 60px;
      font-size: 2rem;
    }

    .contenedorDeListas{
      display: flex;
      justify-content: space-around;
    }
  }
</style>
