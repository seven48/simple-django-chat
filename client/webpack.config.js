const webpack = require("webpack");
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  devServer: {
    contentBase: 'src',
    inline: true,
    hot: true,
    open: true,
    port: 3000
  }
};