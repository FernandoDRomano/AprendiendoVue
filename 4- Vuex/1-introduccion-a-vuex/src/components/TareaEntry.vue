<template>
    <div>
        <h2>Nueva Tarea</h2>
        <form v-on:submit.prevent="agregarTarea"> 
            <input 
                v-model="nombre"
                type="text" 
                name="tareaNombre" 
                id="tareaNombre" 
                placeholder="Nueva Tarea">

            <input 
                v-model="duracion"
                type="number" 
                name="tareaDuracion" 
                id="tareaDuracion"    
                placeholder="Duración de la Tarea">

            <input class="textUppercase" type="submit" value="Agregar Tarea">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'TareaEntry',
        data() {
            return {
                nombre: '',
                duracion: ''
            }
        },
        methods: {
            agregarTarea(){
                /* 
                    CREO EL OBJETO TAREA QUE LE PASARE A LA FUNCION addTarea DEFINIDA EN LA mutations DEL store DE Vuex
                */
                const tarea = {
                    nombre: this.nombre,
                    duracion: this.duracion
                }
                /* 
                    COMO VUEX ESTA AGREGADA A LA INSTANCIA PRINCIPAL DE VUE, ES ACCESIBLE DESDE CUALQUIER LUGAR USANDO this.$store 

                    CON EL METODO commit DEL $store LLAMO A LA FUNCIÓN DEFINIDA EN LAS mutations, EN ESTE CASO LLAMO A LA FUNCIÓN addTarea Y LE PASO COMO PARAMETRO EL OBJETO tarea CREADO ARRIBA
                */
                this.$store.commit('addTarea', tarea)
                
                /* SIMPLEMENTE LIMPIO LOS CAMPOS DEL FORMULARIO */
                this.duracion = "";
                this.nombre = ""

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

    form{
        width: 50%;
        margin: 1rem auto;
        border: 1px solid gray;
        text-align: center;

        input{
            padding: .5rem 0;
            margin: .5rem;
            width: 90%;
            text-align: center;
        }

        .textUppercase{
            text-transform: uppercase;
        }
    }
</style>