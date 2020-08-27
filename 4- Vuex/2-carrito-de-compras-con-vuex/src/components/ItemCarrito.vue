<template>
    <div class="item">
        <div class="imagen">
            <img src="https://picsum.photos/id/160/640/480" alt="logo" width="100%">
        </div>
        <div class="contenido">
            <div class="cabecera">
                <h4 class="titulo">Producto X</h4>
                <a href="" class="btnCerrar">X</a>
            </div>
            <div class="footer">
                <p class="cantidad">Cantidad</p>
                <p class="precio">$ XXX</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ItemCarrito'
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