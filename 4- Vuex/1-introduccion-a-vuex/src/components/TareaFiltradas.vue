<template>
    <div class="listaDeTareas">
        <h2>Tareas ordenadas por duración</h2>
        <ul>
            <li 
                v-for="(tarea, $index) in tareasDesdeVuexConGetters"
                :key="$index">

                {{tarea.nombre}} ({{ tarea.duracion }}hs)
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TareaFiltradas',
        computed: {
            tareasDesdeVuexConGetters(){
                return this.$store.getters.getTareasByDuration;
            }
        },
    }
</script>

<style lang="scss" scoped>
    h2{
        color: cadetblue;
        font-size: 1.2rem;
        text-align: center;
    }
    
</style>