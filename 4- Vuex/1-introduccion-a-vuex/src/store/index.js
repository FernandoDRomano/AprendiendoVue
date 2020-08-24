import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /* 
      EL state MANTIENE LOS DATOS EN UNA UNICA FUENTE, ESTA PUEDE SER MODIFICADADA UNICAMENTE USANDO LAS mutations
  */
  state: {
    tareas: []
  },
  /* 
    LAS mutations SE UTILIZAN PARA MODIFICAR LOS DATOS EN EL STATE, ES LA UNICA FORMA DE HACERLO
  */
  mutations: {
    /* EN ESTE CASO AGREGO UNA FUNCIÓN PARA AGREGAR UNA TAREA A EL ARREGLO DE TAREAS QUE SE ENCUENTRA EN EL state */
    addTarea(state, tarea){
      state.tareas.push(tarea)
    }

  },
  actions: {
  },
  modules: {
  },
  getters:{
    getTareasByDuration(state){
      const tareasFiltradas = [...state.tareas]

      return tareasFiltradas.sort((a,b) => a.duracion - b.duracion );

    }
  }
})
