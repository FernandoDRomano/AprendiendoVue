<template>
  <div class="home">
    <Logo/>
    <HelloWorld msg="Bienvenido a Vue Intermedio"/>
    <BaseForm/>
    <Tareas/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Logo from '@/components/Logo.vue'
import Tareas from '@/components/Tareas.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    Logo,
    Tareas,
  }
}
</script>
