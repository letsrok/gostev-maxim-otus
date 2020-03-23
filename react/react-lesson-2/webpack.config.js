const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx', 'json' ],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};