<template>
    <div class="dashboard">
        <h2>Bienvenido al Dashboard {{ username }}</h2>
        <a href="#" v-on:click.prevent="Logout">Cerrar Seción</a>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'viewDashboard',
        computed:{
            ...mapState(['username'])
        },
        methods:{
            /* AL CERRAR LA SESION CAMBIO EL auth DE VUEX A FALSE */
            Logout(){
                this.$store.dispatch('Logout');
                /* REDIFIJO A LA RUTA LOGIN UNA VEZ CAMBIADA EL auth */
                this.$router.push({name: 'Login'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dashboard{
        
        padding-top: 9rem;

        h2{
            text-align: center;
            font-size: 2.3rem;
            font-weight: bold;
        }
    }
</style>