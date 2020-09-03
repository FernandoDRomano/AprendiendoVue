import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 
  UTILIZAREMOS VUEX PARA CENTRALIZAR LOS DATOS DE LA APLICACIÓN,
  TRAEREMOS LOS DATOS DE LOS USUARIOS DESDE LA API https://randomuser.me Y 
  LO ALMACENAREMOS EN EL LOCALSTORAGE, PARA NO ESTAR HACIENDO CONSULTAS CONSTANTEMENTE A LA API
*/

const store = new Vuex.Store({

  state: {
    usuarios: [],
    username: null,
    auth: false
  },

  mutations: {
    setUsuarios(state, usuarios){
      state.usuarios = usuarios;
    },

    setLogin(state, username){
      state.username = username;
      state.auth = true;
    },

    setLogout(state){
      state.auth = false;
      state.username = null;
    }
  },

  actions: {
    Login(context, username) {
      context.commit("setLogin", username);
    },

    Logout(context) {
      context.commit("setLogout");
    },

    /* 
      ESTA FUNCIÓN ASINCRONA TIENE POR OBJETIVO BUSCAR LOS DATOS, SI ESTOS NO SE ENCUENTRAN EN EL 
      LOCAL STORAGE LOS TRAIGO DESDE LA API Y LOS ALMACENO EN EL LOCAL STORAGE Y ASI CARGARLO EN EL
      STATE DE VUEX
    */
    async cargarUsuarios(context){
      /* 
        BUSCO LOS DATOS DE LOS USUARIOS EN EL LOCAL STORAGE GUARDADO EN LA CLAVE
        usuarios
      */
      const usuariosLocalStorage = window.localStorage.getItem('usuarios');
      //VERIFICO QUE EXISTAN ESOS DATOS
      if(usuariosLocalStorage){
        /* 
          SI EXISTEN LLAMO A LA MUTACIÓN setUsuarios Y LE PASO LOS DATOS ALMACENADOS EN EL LOCAL STORAGE 
          PARA DE ESTA MANERA TENERLOS CARGADO EN EL STATE DE usuarios DE VUEX
        */
        context.commit('setUsuarios', JSON.parse(usuariosLocalStorage));
      }else{
        /* 
          SI NO EXISTEN LOS DATOS ALMACENADOS EN EL LOCAL STORAGE LOS TRAIGO DESDE LA API
        */
        try {
          /* REALIZO LA CONSULTA A LA API */
          await fetch("https://randomuser.me/api/?results=100")
              .then(data => data.json())
              .then(data => {
                  /* LOS DATOS TRAIDOS DE LA API LOS ALMACENO EN EL STATE MEDIANTE LA MUTACIÓN setUsuarios */
                  context.commit("setUsuarios", data.results);
                  /* GUARDO LOS DATOS TRAIDOS DESDE LA API EN EL LOCAL STORAGE */
                  window.localStorage.setItem('usuarios', JSON.stringify(data.results));
              });
        } catch (error) {
          console.error(error);
        }
      }
      
    }
  },

  modules: {
  }
})

export default store;

/* 
  AL GUARDAR LA STORE EN UNA CONSTANTE PUEDE EJECUTAR ESTA ACCIÓN AL FINAL DE LA CARGA 
  DE ESTE ARCHIVO
*/
store.dispatch('cargarUsuarios')