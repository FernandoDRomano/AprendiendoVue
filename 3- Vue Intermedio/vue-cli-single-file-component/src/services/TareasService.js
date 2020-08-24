import Service from './Service.js';

/* 
    ESTA CONSTANTE REPRESENTA LOS RECURSOS QUE SE QUIERE TRABAJAR, A PARTIR DE LA URL BASE DECLARADA EN Service.js, LA IDEA ES HACER LAS PETICIONES ENTONCES AL ENDPOINT 
    https://jsonplaceholder.typicode.com/todos 
*/
const recurso = 'todos';

export default {
    get(){
        return Service.get(recurso)
    },

    post(data){
        return Service.post(recurso, data);
    },

    put(data){
        return Service.put(recurso, data)
    },

    delete(id){
        return Service.put(recurso, id)
    }
}