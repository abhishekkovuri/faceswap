// webpack.config.js
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.html',
  mode: 'development', // replace with the entry point of your project
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      // ... any existing rules ...

      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },

  plugins: [
    // ... any existing plugins ...

    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};