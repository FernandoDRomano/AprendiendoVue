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
        <a class="btn" :style=" 'background-color:' + color" :href="enlace"><destino></destino></a>
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

/* 
    CUARTA COMPONENTE CON VUE: PLANTILLA DE COMPONENTES
*/


const pizza = {
    /* 
        EL TEMPLATE AHORA LE ASIGNO EL SCRIPT DE TEMPLATE 
    */
    template: '#pizza-template',
    props: ['nombre', 'imagen', 'cantidad'],
    methods: {
        /* 
            CON EL METODO $emit ME PUEDO COMUNICAR DESDE ABAJO HACIA ARRIBA 
            (DEL COMPONENTE HIJO AL COMPONENTE PADRE),
            ES DECIR HACIENDO UNA PROPAGACIÓN DEL EVENTO.
            ESTE METODO $emit() RECIBE COMO PARAMETRO EN EVENTO PERSONALIZADO, 
            EN ESTE CASO this.$emit('mas') PARA INDICAR QUE SE SUMA LAS PIZZAS
            Y this.$emit('menos'). 
            LUEGO SE DEBE CAPTURAR ESTE EVENTO EN EL COMPONENTE PADRE A TRAVEZ DE EVENTO
            PERSONALIZADO QUE SE PASA Y SE INDICA LA ACCIÓN A REALIZAR 

            <pizza 
            v-for="pizza in pizzas" 
            ...
            ...
            
            CAPTURANDO EL EVENTO EN EL COMPONENTE PADRE
            v-on:mas="pizza.cantidad++"
            v-on:menos="pizza.cantidad--"
            ...
            ...
            ></pizza>
        */
        masPizza() {
            //this.cantidad++;
            this.$emit('mas');
        },
        menosPizza() {
            //this.cantidad > 0 && this.cantidad--;
            if(this.cantidad > 0){
                this.$emit('menos');
            }
        }
    }
}

new Vue({
    el: "#app4",
    data: {
        totalPizzas: 0,
        pizzas: [
            { 
                nombre: "Pizza de carne", 
                imagen: "https://cocina-casera.com/wp-content/uploads/2011/12/pizaa-carne-receta.jpg", 
                cantidad: 0 
            },
            { 
                nombre: "Mini Pizza", 
                imagen: "https://i.ytimg.com/vi/4wg09Xms_wo/sddefault.jpg", 
                cantidad: 0 
            },
            { 
                nombre: "Pizza Pepperoni", 
                imagen: "https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg", 
                cantidad: 0 
            },
        ]
    },
    computed: {
        calcularTotalDePizzas(){
            this.totalPizzas = 0;
            this.pizzas.forEach( pizza => {
                this.totalPizzas += pizza.cantidad;
            });

            return this.totalPizzas;
        }
    },
    components:{
        pizza
    }

});

/* 
    QUINTO COMPONENTE CON VUE: COMPONENTE DENTRO DE OTRO COMPONENTE
*/

const usuario = {
    props: ['info'],
    template: '#usuario-template',
    methods: {
        usuarioClickeado(){
            this.$emit('seleccion', this.info.username)
        }
    }
}

const usuarios = {
    props: ['listado', 'moverA'],
    template: '#usuarios-template',
    components: {
        usuario
    },
    methods:{
        cambiar(username){
            console.log("el valor seleccionado es: " + username + " mover a " + this.moverA)

            let indice = this.listado.findIndex(elemento => {
                return elemento.username === username;
            })
            
            if(indice > -1){
                this.$root[this.moverA].unshift(this.listado.splice(indice, 1)[0])
            }
        }
    }
   
}


new Vue({
    el: '#app5',
    created() {
        fetch(this.url)
            .then(respuesta => respuesta.json())
            .then(datos => {
                this.usuariosDisponibles = datos.results.map(usuario => {
                    return {
                        nombreCompleto: usuario.name.title + ', ' + usuario.name.first + ' ' + usuario.name.last,
                        username: usuario.login.username,
                        imagen: usuario.picture.large,
                        email: usuario.email
                    }
                })
            })
    },
    data: {
        url: 'https://randomuser.me/api/?results=15',
        usuariosDisponibles: [],
        usuariosSeleccionados: [],
    },
    /* LA INSTANCIA PRINCIPAL UTILIZA AL PRIMER COMPONENTE USUARIOS, Y ESTE UTILIZARA
    A SU VEZ EL COMPONENTE USUARIO */
    components: {
        usuarios
    }

});

/* 
    SEXTO COMPONENTE CON VUE: DISTRIBUCIÓN DE COMPONENTES CON SLOTS
*/

const articuloBaseTemplate = {
    template: '#articulo-base-template',
    props: ['contenido']
}

new Vue({
    el: '#app6',
    data: {
        contenido: {
            titulo: "Este es un titulo desde data de la instancia principal",
            footer: "Este es un pie de página desde data"
        }
    },
    components: {
        articuloBaseTemplate
    }
})

/* 
    SEPTIMO COMPONENTE CON VUE: v-model EN COMPONENTES
*/

const inputBase = {
    props: ['value'],
    template: `
        <div style="margin-bottom: 20px;">
            <label style="display: block;" :for="id">
                <slot></slot>
            </label>
            <input
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)"
                type="text" :id="id" :name="id">
        </div>
       `,
    data() {
        return {
            id: `input-${Math.floor(Math.random() * 10) + 1}`
        }
    }
}

new Vue({
    el: '#app7',
    data: {
        nombre: '',
        apellido: '',
        busqueda: ''
    },
    components: {
        inputBase
    }
});

/* 
    OCTAVO COMPONENTE CON VUE: COMPONENTE DINAMICOS
*/

const tareasTodas = {
    props: ['tareas'],
    template: '#tareas-todas',
}


const tareasUrgentes = {
    props: ['tareas'],
    template: '#tareas-urgentes',
    computed: {
        tareasUrgentesAMostrar(){
            return this.tareas.sort((a, b) => b.prioridad - a.prioridad)
        }
    },
}

const tareasCompletadas = {
    props: ['tareas'],
    template: '#tareas-completadas',
    computed: {
        tareasCompletadasAMostrar(){
            return this.tareas.filter(tarea => tarea.completado === true)
        }
    },
}

new Vue({
    el: '#app8',
    data: {
        actual: ['todas'],
        tabs: ['todas', 'urgentes', 'completadas'],
        tareas: [
            {
                titulo: 'Preparar la serie de Nuxt',
                prioridad: 6,
                completado: false,
            },
            {
                titulo: 'Producir la serie de Vue-cli',
                prioridad: 7,
                completado: false,
            },
            {
                titulo: 'Finalizar la serie de Componentes',
                prioridad: 8,
                completado: false,
            },
            {
                titulo: 'Desarrollar la nueva Web de Escuela Vue',
                prioridad: 9,
                completado: false,
            },
            {
                titulo: 'Finalizar la serie Vue Esencial',
                prioridad: 7,
                completado: true,
            },
        ]
    },
    computed: {
        /* UTILIZO ESTA PROPIEDAD COMPUTADA PARA CONFORMAR EL NOMBRE DEL COMPONENTE DE MANERA DINAMICA */
        tareaSeleccionada(){
            return `tareas-${this.actual}`
        }
    },
    methods: {
        /* UTILIZO ESTE METODOO PARA ACTUALIZAR EL VALOR DEL COMPONENTE A MOSTRAR MEDIANTE EL CLICK EN EL BOTON */
        cambiarComponente(tab){
            this.actual = tab;
        }
    },
    filters: {
        capitalizar(contenido){
            return contenido.substring(0,1).toUpperCase() + contenido.substring(1, contenido.length)
        }
    },
    components: {
        tareasTodas,
        tareasUrgentes,
        tareasCompletadas
    }
});