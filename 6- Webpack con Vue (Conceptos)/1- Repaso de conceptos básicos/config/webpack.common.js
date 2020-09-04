const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  /* ENTRADA */
  entry: "./js/index.js",
  /* SALIDA */
  output: {
    filename: "[hash].bundle.js",
    path: path.resolve(__dirname, "../", "bundle"),
  },
  /* LOADERS */
  module: {
    rules: [
      /* PARA TRABAJAR CON IMAGENES */
        {
            test: /\.jpg$/,
            use: [
            {
                loader: "url-loader",
                options: { limit: 1000 },
            },
            ],
        },
        /* PARA TRABAJAR CON SCSS Y CSS */
        {
            test: /\.scss$/,
            use: [
            // se procesan de derecha a izquierda
            "style-loader", // aplica los estilos via DOM
            "css-loader", // interpreta CSS
            "sass-loader", // procesa SASS
            ],
        },
    ],
  },
  /* PLUGINS */
  plugins: [
    new HtmlWebpackPlugin({
      title: "Index con Webpack",
      filename: "index.html",
    }),
  ],
};

module.exports = config