<template>
    <h4>
        {{ titulo }}
        <a v-on:click.prevent="$emit('eliminar')" href="#" class="eliminar">X</a>
    </h4>
</template>

<script>
    export default {
        name: 'Tarea',
        props: ['titulo']
    }
</script>

<style lang="scss" scoped>
    /* 
    
        PARA USAR SCSS DEBO INSTALAR LAS SIGUIENTES DEPENDENCIAS 
        npm install -D sass-loader sass style-resources-loader

        LUEGO DE INSTALAR LAS DEPENDENCIAS SE DEBE CREAR EL ARCHIVO vue.config.js EN LA RAIZ DEL PROYECTO JUNTO AL ARCHIVO package.json Y COPIAR DENTRO DEL ARCHIVO LA SIGUIENTE CONFIGURACIÓN 

        // vue.config.js
        const path = require('path')

        module.exports = {
        chainWebpack: config => {
            const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
            types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
        },
        }

        function addStyleResource (rule) {
        rule.use('style-resource')
            .loader('style-resources-loader')
            .options({
            patterns: [
                path.resolve(__dirname, './src/assets/main.scss'),
            ],
            })
        }

        UNA VEZ REALIZADO ESTO ES SUFICIENTE PARA PODER TRABAJAR CON SCSS DENTRO DE CADA SINGLE-FILE-COMPONENT Y HACER REFERENCIA A VARIABLES O CLASES DENTRO DEL ARCHIVO SCSS PRINCIPAL
    */
    h4{
        color: $primario;
    }

    .eliminar{
        color: $rojo;
        font-weight: bold;
        text-decoration: none;
        padding: 0 1rem;
    }
</style>