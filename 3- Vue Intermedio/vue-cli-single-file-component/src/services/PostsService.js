import Service from './Service.js'

const recurso = 'posts'

export default {
    get(){
        return Service.get(recurso);
    }

    /* 
        AQUI SE DEBEN CREAR LOS DEMAS METODOS HTTP PARA COMUNICARSE CON LA API
        post, put, delete
    */
}