<template>
    <main>
        <h1>Listas de Productos</h1>
        <section class="contenedor">
            <Producto></Producto>
        </section>
    </main>
</template>

<script>
    import Producto from '@/components/Producto.vue'

    export default {
        name: 'ProductosLista',
        components: {
            Producto
        }
    }
</script>

<style scoped lang="scss">

    main{
        width: 80%;
        margin: 3rem auto;

        h1{
            font-size: 2.5rem;
            color: #009ACC;
            font-weight: bold;
            text-align: center;
            margin: 3rem 0rem;
        }

        .contenedor{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            gap: 2rem;

        }

    }
</style>