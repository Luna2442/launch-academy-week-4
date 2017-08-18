var webpack = require('webpack');

module.exports = {
  entry: {
    path: __dirname+'/src/main.js'
  },
  output: {
    path: __dirname+'/../public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './public',
    inline: true
  }
}
