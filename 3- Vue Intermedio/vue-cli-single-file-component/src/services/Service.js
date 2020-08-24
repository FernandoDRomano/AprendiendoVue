/* 
    ESTE SERVICIO SE ENCARGARA DE HACER LAS PETICIONES A LA URL BASE https://jsonplaceholder.typicode.com/ USANDO LA LIBRERIA AXIOS
*/
import axios from 'axios';

/* 
    LA CONSTANTE QUE TIENE LA URL BASE SE DEBE LLAMAR EXACTAMENTE baseURL PORQUE ES UNA CONFIGURACIÓN DE AXIOS, SE CAMBIARARA EL NOMBRE A url U OTRA COSA NO FUNCIONARIA
*/
const baseURL = 'https://jsonplaceholder.typicode.com/';

export default axios.create({
    baseURL
});
