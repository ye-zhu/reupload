var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './root.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  mode: 'development',
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'app/index.html'
  //   })
  // ],
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
}
