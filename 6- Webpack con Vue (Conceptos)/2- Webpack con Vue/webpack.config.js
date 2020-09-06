const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
    //DETERMINO SI ES EL MODO DESARROLLO PARA INDICAR QUE TIPO SE SOURCE MAP UTILIZAR
    const isDevelopment = argv.mode === "development";

    return {
        /* ENTRADAS */
        entry: './src/js/main.js',
        /* SALIDAS */
        output: {
            filename: '[name].[contentHash].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        /* MODO */
        mode: argv.mode,
        /* INDICO QUE TIPO DE SOURCE MAP USAR */
        devtool: isDevelopment ? "#eval-source-map" : "source-map",
        /* WEBPACK DEV SERVER */
        devServer: {
            contentBase: './dist',
            port: 9000
        },
        /* PARA INDICAR QUE COMPILACIÓN DE VUE USAR */
        resolve: {
            alias: {
              'vue$': 'vue/dist/vue.esm.js'
            }
        },
        /* OPTIMIZACIONES */
        optimization: {
            /* PARA DIVIDIR O TROZAR EL CODIGO EN VARIOS ARCHIVOS CUANDO SE ENCUENTRE REPETIDO */
            splitChunks: {
              chunks: "all",
            },
        },
        /* LOADERS */
        module:{
            rules:[
                /* PARA TRABAJAR CON LOS ARCHIVOS JS CON BABEL */
                {
                    test: /\.js$/,
                    exclude: '/node_modules/',
                    use: {
                        loader: 'babel-loader',
                    }
                },
                /* PARA TRABAJAR CON CSS */
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                },
                /* PARA TRABAJAR CON IMAGENES */
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/,
                    use: ["file-loader"]
                }
            ]
        },
        /* PLUGINS */
        plugins:[
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                title: 'Webpack con Vue desde cero',
                template: './src/index.html'
            })
        ]
    }
}