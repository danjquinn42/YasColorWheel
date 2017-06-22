var webpack = require('webpack');
module.exports = {
  entry: "./scripts/main.js",
  output: {
    path: __dirname,
    filename: "colorwheel.js"
  },
  module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
},
  devtool: "source-map"
};
