var webpack = require('webpack');
module.exports = {
  entry: "./scripts/main.js",
  output: {
    path: __dirname,
    filename: "colorwheel.js"
	},
	devtool: "source-map"
};
