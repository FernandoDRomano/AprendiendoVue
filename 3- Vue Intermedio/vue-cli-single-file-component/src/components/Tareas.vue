<template>
    <div>
        <h3>Tareas ({{ cantidadDeTareas }})</h3>

        <input v-model="nuevaTarea" type="text" name="tarea" id="tarea" placeholder="Escribe la nueva tarea ...">
        <input v-on:click="agregarTarea" type="submit" value="Agregar Tarea">
        <br>
        <input v-model="filtro" type="search" name="filtrar" id="filtrar" placeholder="Buscar Tarea">

        <!-- <ul>
            <li v-for="(tarea, $index) in tareas" :key="tarea.id">
                {{tarea.title}}
                <a v-on:click.prevent="eliminarTarea($index)" href="#" class="eliminar">X</a>
            </li>
        </ul> -->
        <Tarea 
            v-for="(tarea, $index) in tareasFiltradas" 
            :key="tarea.id"
            :titulo="tarea.title"
            v-on:eliminar="eliminarTarea($index)">

        </Tarea>

    </div>
</template>

<script>
    import Tarea from '@/components/Tarea.vue'
     
    export default {
        name: 'Tareas',
        created() {
            fetch(this.url)
                .then(respuesta => respuesta.json())
                .then(datos => this.tareas = datos)
                .catch(error => console.error(error))
        },
        data() {
            return {
                url: 'https://jsonplaceholder.typicode.com/todos',
                tareas: [],
                nuevaTarea: '',
                filtro: ''
            }
        },
        methods: {
            agregarTarea(){
                this.tareas.unshift({
                    title: this.nuevaTarea
                })

                this.nuevaTarea = '';
            },
            eliminarTarea(indice){
                this.tareas.splice(indice, 1);
            }
        },
        computed: {
            cantidadDeTareas(){
                return this.tareas.length
            },
            tareasFiltradas(){
                return this.tareas.filter(tarea => {
                    return tarea.title.includes(this.filtro)
                })
            }
        },
        components:{
            Tarea
        }
    }
</script>

<style scoped>
    /* ul li{
        text-align: left;
    } */
    h4{
        text-align: left;
    }
</style>>
    