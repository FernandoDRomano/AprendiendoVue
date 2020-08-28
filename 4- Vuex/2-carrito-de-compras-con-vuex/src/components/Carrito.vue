<template>
    <div class="carrito">
       <h4 class="titulo">Carrito</h4>
        <ItemCarrito 
            v-for="item in listarProductosDelCarrito" 
            :key="item.id"
            :item="item">
        </ItemCarrito>
        <hr class="separador">
        <div class="total">
            <h5>Total: $ {{calcularTotalCarrito}}</h5>
        </div>
        <div v-if="listarProductosDelCarrito.length" class="checkout">
            <a href="" @click.prevent="checkout" class="comprar">Comprar</a>
        </div>
        <div v-if="validarCompra" class="error">
            <h2>¡Se produjo un error al procesar la compra...!</h2>
        </div>
        
    </div>
</template>

<script>
    import ItemCarrito from '@/components/ItemCarrito.vue'
    import { mapGetters, mapState, mapActions } from 'vuex'

    export default {
        name: 'Carrito',
        methods: {
            ...mapActions({
                checkout: 'checkout'
            })
            /* 
            checkout(){
                this.$store.dispatch('checkout');
            } 
            */
        },
        computed:{
            ...mapGetters({
                listarProductosDelCarrito: 'listarProductosDelCarrito',
                calcularTotalCarrito: 'calcularTotalCarrito'
            }),
            /*             
            listarProductosDelCarrito(){
                return this.$store.getters.listarProductosDelCarrito;
            },
            calcularTotalCarrito(){
                return this.$store.getters.calcularTotalCarrito;
            }, 
            */
           ...mapState({
                validarCompra: 'checkoutError'
           }),
            /*             
            validarCompra(){
                return this.$store.state.checkoutError;
            } 
            */
        },
        components: {
            ItemCarrito
        }
    }
</script>

<style lang="scss" scoped>
    .visible{
        background-color: red;
    }

    .carrito{
        background-color: white;
        color:black;
        display: flex;
        flex-direction: column;
        width: 25rem;
        min-height: 10rem;
        position: absolute;
        z-index: 2;
        top: 100%;
        right: 0;

        .titulo{
            font-size: 1.5rem;
            text-align: center;
            margin: 1.4rem 0 1rem 0;
        }

        .separador{
            background-color: #ededed;
            width: 90%;
        }

        .total{
            width: 90%;
            padding: .7rem 0;
            margin: .3rem auto;
            text-align: center;
            font-size: 1.4rem;
            color: white;
            background-color: #009ACC;

            h5{
                margin: 0;
            }
        }

        .checkout{
            margin: 1rem;

            .comprar{
                text-decoration: none;
                font-size: 1.4rem;
                text-align: center;
                padding: .7rem 2rem;
                border-radius: 2rem;
                background-color: rgb(5, 172, 5);
                color: white;
                display: block;
            }
        }

        .error{
            background-color: red;
            color: white;
            text-align: center;
            padding: 1rem;
            margin: 1rem;
        }

    }
</style>