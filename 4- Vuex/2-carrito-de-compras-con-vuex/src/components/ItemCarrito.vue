<template>
    <div class="item">
        <div class="imagen">
            <img :src="item.imagen" :alt="item.titulo" width="100%">
        </div>
        <div class="contenido">
            <div class="cabecera">
                <h4 class="titulo">{{ item.titulo }}</h4>
                <a href="" v-on:click.prevent="eliminarProductoDelCarrito(item)" class="btnCerrar">X</a>
            </div>
            <div class="footer">
                <p class="cantidad">Cantidad: {{ item.cantidad }}</p>
                <p class="precio">$ {{ item.precio }} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'ItemCarrito',
        props: ['item'],
        methods: {
            ...mapActions({
                eliminarProductoDelCarrito: 'eliminarProductoDelCarrito'
            })
            /* eliminarProductoDelCarrito(item){
                this.$store.dispatch('eliminarProductoDelCarrito', item)
            } */
        }
    }
</script>

<style lang="scss" scoped>
    .item{
        display: flex;
        margin: .5rem 1rem;

        .imagen{
            width: 35%;
        }

        .contenido{
            width: 65%;
            margin-left: .7rem;

            .cabecera{
                .titulo{
                    margin: 1rem 0;
                    font-size: 1.2rem;
                }

                .btnCerrar{
                    color: white;
                    background-color: red;
                    height: 2rem;
                    width: 2rem;
                    border-radius: 50%;
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 1.3rem;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            .footer, .cabecera{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
</style>