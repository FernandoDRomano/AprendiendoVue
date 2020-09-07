const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = (env, argv) => {
    //DETERMINO SI ES EL MODO DESARROLLO PARA INDICAR QUE TIPO SE SOURCE MAP UTILIZAR
    const isDevelopment = argv.mode === "development";

    return {
        /* ENTRADAS */
        entry: './src/js/main.js',
        /* SALIDAS */
        output: {
            filename: '[name].[contenthash].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        /* MODO */
        mode: argv.mode,
        /* INDICO QUE TIPO DE SOURCE MAP USAR */
        devtool: isDevelopment ? "#eval-source-map" : "source-map",
        /* WEBPACK DEV SERVER */
        devServer: {
            contentBase: './dist',
            hot: true,
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
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                    },
                },
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
                    test: /\.scss$/,
                    use: [
                        /* INDICO QUE LOADER UTILIZAR SI ES QUE SE ENCUENTRA EN DESARROLLO O PRODUCCIÓN */
                            isDevelopment ? "vue-style-loader" : MiniCssExtractPlugin.loader, 
                            "css-loader",
                            //"sass-loader"
                            {
                                loader: "sass-loader",
                                options: {
                                    prependData:`@import "${path.resolve(__dirname, 'src/css/global.scss')}";`,
                                },
                            }, 
                        ]
                },
                /* PARA TRABAJAR CON VUE */
                {
                    test: /\.vue$/,
                    loader: "vue-loader"
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
            new VueLoaderPlugin(),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: isDevelopment ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
            }),
            new HtmlWebpackPlugin({
                title: 'Webpack con Vue desde cero',
                template: './src/index.html'
            })
        ]
    }
}