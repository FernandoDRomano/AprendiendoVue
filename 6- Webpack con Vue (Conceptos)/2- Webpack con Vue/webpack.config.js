const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    return {
        /* ENTRADAS */
        entry: './src/js/main.js',
        /* SALIDAS */
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        /* PLUGINS */
        plugins:[
            new HtmlWebpackPlugin({
                title: 'Webpack con Vue desde cero',
                template: './src/index.html'
            })
        ]
    }
}