<template>
    <div class="error">
        <h2>Ups no encontramos el recurso que buscabas....</h2>
    </div>
</template>

<script>
    export default {
        name: 'Error404'
    }
</script>

<style lang="scss" scoped>
    .error{
        background-color: rgba($color: #000000, $alpha: .7);
        color: white;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;

        h2{
            font-size: 4rem;
        }
    }
</style>