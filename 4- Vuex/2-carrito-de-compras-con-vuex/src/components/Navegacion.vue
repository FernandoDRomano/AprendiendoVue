<template>
    <header>
        <h1>Tienda Virtual: Carrito de compra con Vuex</h1>
        <a v-on:click.prevent="visibilizarCarrito" href="" class="carrito">
            <img src="../assets/carrito.svg" alt="Carrito">
        </a>
        <transition name="fade">
            <Carrito v-show="visibilizar"></Carrito>
        </transition>
    </header>
</template>

<script>
    import Carrito from '@/components/Carrito.vue'

    export default {
        name: 'Navegacion',
        data(){
            return{
                visibilizar: false,
            }
        },
        methods:{
            visibilizarCarrito(){
                this.visibilizar === true ? this.visibilizar = false : this.visibilizar = true;
            }
        },
        components: {
            Carrito
        }
    }
</script>

<style lang="scss" scoped>

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }

    header {
        position: relative;
        margin: 0;
        background-color: #009ACC;
        color: white;
        padding: .2rem 9rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 2.5rem;
            text-align: center;
        }

        .carrito{
            img{
                width: 2.5rem;
            }
        }
    }

</style>