<template>
  <article class="producto">
    <div class="imagen">
      <img src="https://picsum.photos/id/160/640/480" alt="logo" width="100%" />
    </div>
    <div class="contenido">
      <h3 class="titulo">Producto</h3>
      <p
        class="descripcion"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi corrupti minima, sunt quisquam facere earum.</p>
      <p class="descripcion">Cantidad: 10</p>
      <div class="precio">
        <p>$ XXX</p>
        <BotonAgregar></BotonAgregar>
      </div>
    </div>
  </article>
</template>

<script>
    import BotonAgregar from '@/components/BotonAgregar.vue'

    export default {
        name: "Producto.vue",
        components: {
            BotonAgregar
        }
    };
</script>

<style lang="scss" scoped>
    .producto {
        border-radius: 0.5rem;
        background-color: white;

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