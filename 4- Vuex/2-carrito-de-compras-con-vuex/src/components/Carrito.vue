<template>
    <div class="carrito">
       <h4 class="titulo">Carrito</h4>
        <ItemCarrito></ItemCarrito>
        <hr class="separador">
        <div class="total">
            <h5>Total: $ XXX</h5>
        </div>
    </div>
</template>

<script>
    import ItemCarrito from '@/components/ItemCarrito.vue'

    export default {
        name: 'Carrito',
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

    }
</style>