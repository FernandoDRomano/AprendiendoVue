<template>
    <div class="editar">
        <h4>Editar Titulo del Producto: Utilizando Vuex con v-model</h4>
        <input type="text" placeholder="Editar titulo del producto" v-model="tituloProducto">
    </div>
</template>

<script>
    export default {
        name: 'ProductoEditarTitulo',
        computed: {
            tituloProducto: {
                get(){
                    return this.$store.state.productoSeleccionado.titulo;
                },
                set(valor){
                    this.$store.commit('actualizarTitulo', {titulo: valor});
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .editar{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: cornflowerblue;
        margin: 2rem 0;
        padding: 1rem;

        h4{
            text-align: center;
            color: white;
            font-size: 2rem;
        }

        input{
            font-size: 1.4rem;
            padding: .5rem 0;
        }
    }
</style>