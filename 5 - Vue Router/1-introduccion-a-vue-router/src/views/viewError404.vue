<template>
    <div>
        <Navegacion></Navegacion>
        <RouterView></RouterView>
        <Error404></Error404>
    </div>
</template>

<script>
    import Navegacion from '@/components/Navegacion.vue'
    import Error404 from '@/components/Error404.vue'
    export default {
        name: 'viewError404',
        components:{
            Navegacion,
            Error404
        }
    }
</script>

<style lang="scss" scoped>

</style>