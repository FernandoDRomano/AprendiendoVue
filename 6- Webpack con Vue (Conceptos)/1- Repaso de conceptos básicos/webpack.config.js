const { merge } = require("webpack-merge");
/* CONFIGURACIÓN COMUN PARA AMBOS ARCHIVOS */
const commonConfig = require("./config/webpack.common");

/* 
    USANDO WEBPACK-MERGE PARA COMPONER LA CONFIGURACIÓN EN DIFERENTES ARCHIVOS
*/
module.exports = (env, argv) => {
    /* OBTENGO EL MODO, SI ES DE PRODUCCIÓN O DESARROLLO */
    const mode = argv.mode === "development" ? argv.mode : "production";
    /* OBTENGO EL ARCHIVO SEGUN EL MODO */
    const modeConfig = require(`./config/webpack.${mode}`)
    /* RETORNO LA CONFIGURACIÓN COMPLETA, EL ARCHIVO COMUN MAS EL ARCHIVO DEPENDIENTE DEL MODO */
    return merge(commonConfig, modeConfig)
}