var path = require('path');
module.exports = {
  entry: [
    './js/main.js',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          //plugins: ['transform-runtime'],
          presets: ['es2015'],
        }
      }
    ]
  }
};
