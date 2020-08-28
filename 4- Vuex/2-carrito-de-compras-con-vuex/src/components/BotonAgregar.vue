<template>
    <a @click.prevent="agregarProductoAlCarrito(producto)" href="#" class="btn btn-agregar">Agregar</a>
</template>

<script>
    export default {
        name: 'BotonAgregar',
        props: ['producto'],
        methods:{
            agregarProductoAlCarrito(producto){
                /* LLAMO A UNA action DEL VUEX PARA AGREGAR EL PRODUCTO AL CARRITO */
                this.$store.dispatch('agregarProductoAlCarrito', producto);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn{
        padding: .6rem 1.4rem;
        text-decoration: none;
        color: white;
        font-size: 1rem;
        border-radius: 2rem;
    }

    .btn-agregar{
        background-color: #009ACC;
    }
</style>