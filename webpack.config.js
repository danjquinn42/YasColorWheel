var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./scripts/main.js",
  output: {
    path: __dirname,
    filename: "colorwheel.js"
  },
  module: {
  loaders: [
    { test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
          presets: ['react', 'es2015']
        },
      include: [
        path.join(__dirname, 'scripts'),
        path.join(__dirname, 'spec')
      ]}
  ]
},
  devtool: "source-map"
};

// {
//     test: /\.js$/,
//     loader: 'babel-loader',
//     include: [
//         path.join(__dirname, 'app'),
//         path.join(__dirname, 'test')
//     ],
//     exclude: path.join(__dirname, 'node_modules')
// },
