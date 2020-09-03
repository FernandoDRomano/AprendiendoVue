<template>
  <div id="app">
    <Navegacion/>
    <!-- 
      RouterView ES EL ENCARGADO DE RENDERIZAR EL COMPONENTE ADECUADO SEGUN LA RUTA SELECCIONADO EN LOS
      RouterLink QUE SE ENCUENTRAN DENTRO DEL COMPONENTE DE Navegacion 
    -->
    <transition name="fade" mode="out-in">
      <RouterView/>
    </transition>
  </div>
</template>

<script>
  import Navegacion from '@/components/Navegacion.vue'
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

  /* .fade-enter-active,
  .fade-leave-active {
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  .fade-enter,
  .fade-leave {
    opacity: 0;
  } */

.fade-enter-active {
  animation: fade .7s ease-in-out;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  50% {
    opacity: 50%;
  }
  to {
    opacity: 1;
  }
}

.fade-leave-active {
  animation: slide .3s ease-in-out;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
