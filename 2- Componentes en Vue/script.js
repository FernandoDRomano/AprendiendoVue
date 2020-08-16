Vue.config.devtools = true;
/* 
    PRIMERA APLICACIÓN CON COMPONENTES
*/


/* 
    LOS COMPONENTES SE DEBEN DEFINIR ANTES DE LA INSTANCIA DE VUE EN LA CUAL SE MONTARAN
*/

/* ESTO ES LA DECLARACIÓN DE UN COMPONENTE DE MANERA GLOBAL */
Vue.component('gato', {
    template: `<img :src="urlCompleta">`,
    data(){
        return {
            ancho: Math.floor(Math.random() * 600) + 50,
            alto: Math.floor(Math.random() * 600) + 50
        }
    },
    computed: {
        urlCompleta(){
            return `https://placekitten.com/${this.ancho}/${this.alto}`
        }
    },
});

new Vue({
    el: '#app1'
})

/* SEGUNDO COMPONENTE CON VUE */

Vue.component('boton', {
    props: ['color', 'enlace', 'anchorText'],
    template: `
        <a class="btn" :style=" '            background-color:' + color" :href="enlace">{{ anchorText }}</a>
    `
});

new Vue({
    el: '#app2',
    data:{
        botones: [
            {
                color: 'red', enlace: 'https://escuelavue.es/', anchorText: 'Escuela Vue'
            }, 
            {
                color: 'blue', enlace: 'https://www.facebook.com/', anchorText: 'Facebook'
            }, 
            {
                color: 'purple', enlace: 'https://www.lagaceta.com.ar/', anchorText: 'La Gaceta'
            }, 
            {
                color: 'black', enlace: 'https://www.ole.com.ar/', anchorText: 'Ole'
            }, 
            {
                color: 'orange', enlace: 'https://infobae.com/', anchorText: 'Infobae'
            }, 
        ]
    }
});


/* 
    TERCER COMPONENTE CON VUE: COMPONENTES LOCALES
*/

/* ESTA ES LA DECLARACIÓN DE UN COMPONENTE DE MANERA LOCAL */

const destino = {
    template: `<span>Soy el destino<span>`, 
}

const btn = {
    props: ['color', 'enlace', 'anchorText'],
    template: `
        <a class="btn" :style=" '            background-color:' + color" :href="enlace"><destino></destino></a>
    `,
    /* 
        PARA UTILIZAR UN COMPONENTE LOCAL DENTRO DE OTRO COMPONENTE, DEBO USAR LA PROPIEDAD components E INDICAR QUE COMPONENTE SE VA A UTILIZAR
    */
    components:{
        destino
    }
}

new Vue({
    el: '#app3',
    data: {},
    components: {
        btn,
        destino,
    }

});