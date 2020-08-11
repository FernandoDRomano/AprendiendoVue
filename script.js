/* CONFIGURACIÓN NECESARIA PARA ACCEDER A LA CONSOLA DE DEPURACIÓN DE VUE JS */
Vue.config.devtools = true;

/* PRIMERA APP CON VUE JS */
new Vue({
  /* el: DETERMINA EL ELEMENTO EN DONDE UTILIZAREMOS VUE */
  el: "#app1",
  /* data: DETERMINA LOS MODELOS DE DATOS QUE UTILIZARA, PUEDEN SER TODOS LOS QUE QUIERA, ESTOS PUEDEN SER ARREGLOS, OBJETOS, ETC. */
  data: {
    productos: [
      { nombre: "Coca cola", stock: 10 },
      { nombre: "Pespi Cola", stock: 2 },
      { nombre: "Galletas saladas", stock: 15 },
      { nombre: "Galletas dulces", stock: 12 },
    ],
  },
  /* methods: LOS METODOS SON LAS FUNCIONES QUE PODEMOS CREAR Y UTILIZARLAS PARA IMPLEMENTAR ALGUNA LOGICA EN NUESTRA APLICACIÓN */
  methods: {

  },
  /* computed: SON LAS PROPIEDADES COMPUTADAS, ESTAS SON SIMILARES A LOS METODOS PERO SIEMPRE DEBEN RETORNAR UN VALOR */
  computed: {
    listaDeProductos() {
      return this.productos.map((producto) => {
        return `El producto ${producto.nombre} tiene ${producto.stock} unidades en stock`;
      });
    },
  },
});

/* SEGUNDA APP CON VUE JS */
new Vue({
  el: "#app2",
  data: {
    tareas: [],
    nuevaTarea: "",
  },
  methods: {
    guardarTarea() {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = "";
    },
  },
});

/* TERCERA APP CON VUE JS */
new Vue({
    el: '#app3',
    data: {
        enlace: '',
        alto: 50,
        ancho:50, 
        urlBase: "https://placekitten.com"
    },
    computed:{
        urlCompleta(){
            return `
                ${this.urlBase}/${this.ancho * 10}/${this.alto * 10}
            `;
        }
    }
});

/* CUARTA APP CON VUE JS */
new Vue({
    el: '#app4',
    data: {
        tareas: [
            {nombre: 'Aprender JavaScript moderno', tiempo: 3},
            {nombre: 'Aprender Vue.js', tiempo: 7},
            {nombre: 'Reparar el coche', tiempo: 22},
            {nombre: 'Viajar más', tiempo: 16},
            {nombre: 'Comprar la cena', tiempo: 12},
            {nombre: 'Mejorar como desarrollador', tiempo: 9},
            {nombre: 'Dar un curso', tiempo: 14},
        ],
        tiempo: 100,
        busqueda: '',
        nuevaTarea: ''
    },
    methods: {
        agregarTarea(){
            this.tareas.unshift({
                nombre: this.nuevaTarea,
                tiempo: Math.floor(Math.random() * 100)
            });
            this.nuevaTarea = null;
        }
    },
    computed:{
        filtrarTareas(){
            return this.tareas.filter(tarea => {
                return tarea.tiempo <= this.tiempo && tarea.nombre.includes(this.busqueda)
            })
        }
    }
});

new Vue({
    /* 
        EL METODO created() PERTENECE AL CICLO DE VIDA DE VUE, ES UTILIZADO CUANDO LA INSTANCIA DE VUE YA FUE CREADA Y QUEREMOS HACER ALGUNA ACCIÓN, EN ESTE CASO CUANDO SE CREA LA INTANCIA DE VUE LLAMAMOS A UNA API PARA GUARDAR LOS DATOS EN EL MODELO
    */
    created() {
        let urlBase = "https://jsonplaceholder.typicode.com/users";

        fetch(urlBase)
            .then(response => response.json())
            .then(data => this.usuarios = data);
    },
    el: '#app5',
    data:{
        usuarios: []
    }
});

new Vue({
    el: '#app6',
    data: {
        password: null,
        estado: 'Introduce tu nuevo password',
        noValidos: [
            'admin',
            '12345',
            'password'
        ]
    },
    /* 
        PARA REALIZAR EL SEGUIMIENTO DE UNA PROPIEDAD DEL MODELO O ALGUN ELEMENTO REACTIVO
    */
    watch: {
        /* 
            LA FUNCIÓN QUE SE DEFINA DEBE TENER EL MISMO NOMBRE QUE LA PROPIEDAD QUE SE INTENTA OBSERVAR
        */
        password(nuevo, antiguo){

            if(nuevo.length == 0){
                this.estado = 'Introduce tu nuevo password'
                return false;
            }
            
            if (nuevo.length > 8) {
                this.estado = "El password es muy largo";
                return false;
            }

    
            if(this.noValidos.indexOf(nuevo) > -1){
                this.estado = 'Password no valido'
                return false;
            }
               
            this.estado = 'Password valido'
            
        }
    },
});

new Vue({
    el: '#app7',
    data: {
        direccion: 'misma',
        check: false
    }
});

new Vue({
    el: '#app8',
    created(){
        let url = "https://jsonplaceholder.typicode.com/posts";

        fetch(url)
            .then(response => response.json())
            .then(datos => this.posts = datos)
    },
    data: {
        posts: []
    },
    /* 
        LOS filters O FILTROS SON PARECIDOS A LAS computed, PERO SE DIFERENCIAN DE ESTAS DEBIDO A QUE SON MAS REUTILIZABLES
    */
    filters:{
        mayuscula(datos){
            return datos.toUpperCase();
        },
        acortar(datos, cantidad){
            return datos.substring(0, cantidad) + '... seguir leyendo';
        }
    }
})