<template>
    <main>
        <h1>Listas de Productos</h1>
        <section class="contenedor">
            <Producto 
                v-for="producto in productos"
                :key="producto.id"
                :producto="producto">
            </Producto>
        </section>
        <section>
            <ProductoEditarTitulo></ProductoEditarTitulo>
        </section>
    </main>
</template>

<script>
    import Producto from '@/components/Producto.vue'
    import ProductoEditarTitulo from '@/components/ProductoEditarTitulo.vue'
    import { mapGetters } from 'vuex'

    export default {
        name: 'ProductosLista',
        /* 
            COMO SE LLAMARA A UNA FUNCION ASINCRONA DENTRO DEL actions UTILIZO ASYNC AWAIT
        */
        async created(){
            /* LAS ACCIONES DE actions SON LLAMADAS MEDIANTE EL METODO dispatch DEL $store DE VUEX */
            await this.$store.dispatch('getProductos')
        },
        computed:{
            ...mapGetters({
                productos: 'getProductosEnStock'
            })
            /* 
                MEDIANTE UNA PROPIEDAD COMPUTADA OBTENGO LOS PRODUCTOS ALMACENADOS EN EL state DE VUEX
                productos(){
                    return this.$store.getters.getProductosEnStock;
                }
            */
        },
        components: {
            Producto,
            ProductoEditarTitulo
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