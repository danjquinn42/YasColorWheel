const path = require('path');

module.exports = {
  entry: "./scripts/main.js",
  output: {
    path: __dirname,
    filename: "colorwheel.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        },
        include: [
          path.join(__dirname, 'scripts'),
          path.join(__dirname, 'test')
        ]
      }
    ]
  },
  devtool: "source-map"
};
