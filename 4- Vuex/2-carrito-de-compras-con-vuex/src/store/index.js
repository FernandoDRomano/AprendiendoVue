import Vue from 'vue'
import Vuex from 'vuex'
/* ESTE ARCHIVO REPRESENTA LA INFORMACIÓN TRAIDA DESDE UNA API... */
import api from '@/api/shop.js'

Vue.use(Vuex)

export default new Vuex.Store({

  strict: true,

  /* 
    EL state ES EL ALMACEN CENTRALIZADO DE VUEX, AQUI ES DONDE ESTARA TODA LA INFORMACIÓN
    A LA QUE PODRAN ACCEDER TODOS LOS COMPONENTES
  */
  state: {
    productos: [],
    carrito: [],
    checkoutError: false,
    productoSeleccionado: {}
  },
  /* 
    LAS mutations SON LAS UNICAS QUE PUEDEN MODIFICAR EL state
  */
  mutations: {
    /* CON ESTA MUTACIÓN ESTABLEZCO LOS VALORES DEL state.productos */
    setProductos(state, productos){
        state.productos = productos;
    },

    /* MUTACIÓN QUE AGREGARA UN PRODUCTO AL CARRITO */
    agregarProductoAlCarrito(state, producto){
      state.carrito.push({
        id: producto.id,
        cantidad: 1
      });
    },

    /* MUTACIÓN QUE SETEA EL VALOR DEL PRODUCTO SELECCIONADO, AL CUAL LUEGO CAMBIARE EL TITULO */
    setProductoSeleccionado(state, producto){
      state.productoSeleccionado = producto;
    },

    /* ELIMINAR UN PRODUCTO DEL CARRITO */
    eliminarProductoDelCarrito(state, indice){
      state.carrito.splice(indice, 1);
    },

    /* RESTAURA LA CANTIDAD DE INVENTARIO DE UN PRODUCTO, CUANDO ESTE ES ELIMINADO DEL CARRITO DE COMPRAS */
    restaurarInventarioDelProducto(state, item){
      const producto = state.productos.find(producto => producto.id === item.id)
      producto.inventario += item.cantidad;
    },

    /* MUTACION QUE INCREMENTARA LA CANTIDAD DEL PRODUCTO AGREGADO EN EL CARRITO EN UNA UNIDAD */
    incrementarLaCantidadDelProductoEnElCarrito(state, item){
      item.cantidad++;
    },

    /* MUTACIÓN QUE REDUCIRA EL INVENTARIO EN UNA UNIDAD */
    reducirInventarioDelProducto(state, producto){
      producto.inventario--;
    },

    /* MUTACIÓN QUE ACTUALIZAO EL TITULO DEL PRODUCTO SELECCIONADO */
    actualizarTitulo(state, datos){
      //BUSCAR EL INDICE DEL PRODUCTO SELECCIONADO
      const indice = state.productos.findIndex(producto => producto.id === state.productoSeleccionado.id)

      //COMPONER EL NUEVO PRODUCTO CON LOS VALORES ANTIGUOS PERO EL TITULO CAMBIADO
      const productoModificado = Object.assign({}, state.productos[indice], datos)

      // ACTUALIZAR ACTIVANDO LA REACTIVIDAD
      Vue.set(state.productos, indice, productoModificado);
    },

    /* MUTACIÓN QUE VACIA EL CARRITO SI EL CHECKOUT SE PRODUCE SIN ERRORES */
    vaciarCarrito(state){
      state.carrito = [];
    },

    /* MUTACIÓN QUE ACTUALIZA SI ES QUE EXISTE UN ERROR AL MOMENTO DE HACER EL CHECKOUT */
    checkoutError(state, error){
      state.checkoutError = error;
    }
  },
  /* 
    LAS actions PUEDEN LLAMAR A EJECUTAR LAS mutations Y DE ESTA FORMA ALTERAR EL state, ADEMAS
    ESTAS actions PUEDEN SER ASINCRONAS, PERFECTAS PARA HACER LLAMADAS A ENDPOINTS O APIS
  */
  actions: {
    /* 
      LAS actions ADEMAS RECIBEN COMO PARAMETRO EL context QUE ES UNA VARIABLE DE VUEX, QUE PERMITE
      ACCEDER A TODOS SUS METODOS COMO commit, dispatch, ETC.
    */
    getProductos(context){
      /* AL SER UNA FUNCION ASINCRONA UTILIZO UNA PROMESA, AUNQUE SI FUERA UNA API REAL PODRIA UTILIZAR FETCH O AXIOS */
      return new Promise(resolve => {
        api.getProducts(productos => {
          /* 
              CUANDO TRAIGO LOS PRODUCTOS DESDE LA API, UTILIZO LA MUTACION setProductos PARA ESTABLECER 
              EL VALOR DEL state.productos, ESTA OPERACIÓN LA REALIZO MEDIANTE UN commit, QUE ES LA FORMA DE LLAMAR A LAS 
              MUTACIONES DE VUEX
          */
          context.commit('setProductos', productos);
          resolve()
        });
      });
    },

    /* ACCIÓN QUE LLAMA A LA MUTACIÓN PARA INDICAR CUAL ES EL PRODUCTO SELECCIONADO Y DE ESTA FORMA ACTUALIZAR EL state */
    updateProductoSeleccionado(context, producto){
      context.commit('setProductoSeleccionado', producto);
    },


    /* ACCIÓN QUE AGREGARA LOS PRODUCTOS AL CARRITO */
    agregarProductoAlCarrito(context, producto){
        //VERIFICO QUE TENGAN INVENTARIO ESE PRODUCTO
        if(producto.inventario > 0){
          //BUSCO SI EL PRODUCTO SE ENCUENTRA EN EL CARRITO
          const itemCarrito = context.state.carrito.find(item => item.id === producto.id);
          //VERIFICO SI EXISTE
          if(itemCarrito){
            //EN EL CASO DE QUE EXISTA EL PRODUCTO EN EL CARRITO TENGO QUE INCREMENTAR EN 1 LA CANTIDAD
            context.commit('incrementarLaCantidadDelProductoEnElCarrito', itemCarrito);
          }else{
            //EN CASO DE QUE EL PRODUCTO NO ESTE EN EL CARRITO DEBO AGREGARLO
            context.commit('agregarProductoAlCarrito', producto);
          }

          //POR ULTIMO DEBO DESCONTAR EL STOCK DE INVENTARIO DEL PRODUCTO
          context.commit('reducirInventarioDelProducto', producto);

        }else{
          //SI NO TIENE INVENTARIO AUTOMATICAMENTE RETORNO
          return;
        }
    },

    /* ACCIÓN QUE ELIMINA UN PRODUCTO DEL CARRITO */
    eliminarProductoDelCarrito(context, item){
      //BUSCO EL INDICE DEL ITEM DEL CARRITO DENTRO DEL CARRITO
      const indice = context.state.carrito.findIndex(producto => producto.id === item.id)
      //ELIMINAR EL PRODUCTO DEL CARRITO
      context.commit('eliminarProductoDelCarrito', indice);
      //RESTAURAR LA CANTIDAD DEL INVENTARIO DE ESE PRODUCTO
      context.commit('restaurarInventarioDelProducto', item);
    },

    /* 
      ESTE ES UN METODO SIMULADO PARA HACER UN CHECKOUT, RECIBE 3 PARAMETROS: 
      LOS PRODUCTOS, Y 2 FUNCIONES UN CALLBACK DE EXITO Y OTRO DE ERROR 
    */
    checkout(context){
      api.buyProducts(context.state.carrito, () => {
        //VACIAR CARRITO
        context.commit('vaciarCarrito')
        //ASEGURAR QUE NO EXISTA ERROR
        context.commit('checkoutError', false)
      }, ()=>{
        //NOTIFICAR QUE SE PRODUJO UN ERROR
        context.commit('checkoutError', true)
      })
    }


  },
  /* 
    LOS getters SON SIMILARES A LAS PROPIEDADES COMPUTADAS, ESTAS DEVUELVEN UN VALOR Y SIEMPRE SE REEVALUAN CUANDO CAMBIA 
    EL VALOR DE ALGUNA DE SUS DEPENDENCIAS
  */
  getters:{
    /* DEVUELVE TODOS LOS PRODUCTOS QUE TENGAN STOCK > 0 */
    getProductosEnStock(state){
      return state.productos.filter(producto => {
        return producto.inventario > 0;
      })
    },

    /* DEVUELVE TODOS LOS PRODUCTOS QUE ESTEN EN EL CARRITO */
    listarProductosDelCarrito(state){
      /*  COMO EN EL CARRITO SOLO TENGO LOS ITEM CON SU ID Y CANTIDAD, DEBO RECORRER EL ARREGLO, BUSCAR LOS PRODUCTOS PARA 
          OBTENER SUS DATOS Y DEVOLVER UN ITEM COMPLETO PARA EL CARRITO
      */
      return state.carrito.map(item => {
        
        const producto = state.productos.find(producto => producto.id === item.id);

        return {
          id: producto.id,
          titulo: producto.titulo,
          precio: producto.precio,
          cantidad: item.cantidad,
          imagen: producto.imagen
        }

      }); 
    },

    /* CALCULO EL TOTAL DEL CARRITO */
    calcularTotalCarrito(state, getters){
      let total = 0;
      getters.listarProductosDelCarrito.forEach(item => {
          total = total + item.precio * item.cantidad
      });
      
      return total;
    },

    /* 
        GETTERS QUE RECIBEN PARAMETROS, POR DEFECTO LOS GETTERS NO RECIBEN PARAMETROS A MENOS QUE DEVUELVAN
        UNA FUNCIÓN. EN ESTE CASO CREARE UN GETTERS PARA AGREGAR UNA CLASE SI UN PRODUCTO ESTA POR AGOTARSE
    */

    productoAPuntoDeAgotarse(state){
      return id => {
        return state.productos.find(producto => producto.id === id).inventario < 3;
      }
    }

  },
  modules: {

  }
})
