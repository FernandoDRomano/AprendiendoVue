const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    return {
        /* ENTRADAS */
        entry: './src/js/main.js',
        /* SALIDAS */
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        /* LOADERS */
        module:{
            rules:[
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
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                title: 'Webpack con Vue desde cero',
                template: './src/index.html'
            })
        ]
    }
}