<template>
    <div class="listaDeTareas">
        <h2>Listado de Tareas</h2>
        <ul>
            <li 
                v-for="(tarea, $index) in tareasDesdeVuex" 
                :key="$index"> 
                
                {{tarea.nombre}} ({{ tarea.duracion }}hs)
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TareaList',
        computed: {
            /* 
                CREO UNA PROPIEDAD COMPUTADA QUE LEERA LOS DATOS (state),ES DECIR ESCUCHARA LOS DATOS DESDE EL $store DE VUEX
            */
            tareasDesdeVuex(){
                /* 
                    SOLO ES NECESARIO ACCEDER AL state MEDIANTE EL $store DE VUEX Y BUSCAR LA PROPIEDAD, EN ESTE CASO tareas
                */
                return this.$store.state.tareas;
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