<template>
  <article @click="productoSeleccionado(producto)" class="producto" :class="{'agotandose': $store.getters.productoAPuntoDeAgotarse(producto.id)}">
    <div class="imagen">
      <img :src="producto.imagen" alt="logo" width="100%" />
    </div>
    <div class="contenido">
      <h3 class="titulo">{{ producto.titulo }}</h3>
      <h4 v-show="$store.getters.productoAPuntoDeAgotarse(producto.id)" class="textoAgotandose">Apurate que se agota</h4>
      <p class="descripcion"> {{ producto.descripcion }} </p>
      <p class="descripcion">Cantidad: {{producto.inventario}} </p>
      <div class="precio">
        <p>$ {{ producto.precio }} </p>
        <BotonAgregar :producto="producto"></BotonAgregar>
      </div>
    </div>
  </article>
</template>

<script>
    import BotonAgregar from '@/components/BotonAgregar.vue'
    /* USANDO LOS HELPERS DE VUEX */
    import { mapActions } from 'vuex'

    export default {
        name: "Producto.vue",
        props: ['producto'],
        methods:{
            /* mapActions PARA LAS actions */
            ...mapActions({
              /* COMO EL NOMBRE DE LA actions Y DEL methods DIFIEREN, ENTONCES SE COLOCA
              DE LA SIGUIENTE MANERA => nombreMetodo: 'nombreActions' */
              productoSeleccionado: 'updateProductoSeleccionado'
            }),
            /* 
            productoSeleccionado(producto){
              this.$store.dispatch('updateProductoSeleccionado', producto)
            } 
            */
        },
        components: {
            BotonAgregar
        }
    };
</script>

<style lang="scss" scoped>
    .agotandose{
      border: 3px solid tomato;
      background-color: lightcoral!important;

      .textoAgotandose{
        color: white;
        text-align: center;
        font-size: 1.2rem;
      }
    }

    .producto {
        border-radius: 0.5rem;
        background-color: white;
        cursor: pointer;

        .contenido {
            .titulo {
                font-size: 1.6rem;
                font-weight: bold;
                color: #020202;
                text-align: center;
                margin: 0.7rem;
                text-transform: uppercase;
            }

            .descripcion {
                padding: 0 1rem;
                color: rgba(black, 0.5);
                font-weight: 300;
            }

            .precio {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0rem 1rem 1rem 1rem;

                p {
                    margin: 0;
                    font-weight: bold;
                    font-size: 1.2rem;
                }
            }
        }
    }
</style>