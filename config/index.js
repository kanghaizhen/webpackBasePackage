const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: "[name].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: "/node_modules/"
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MyApp',
      template: 'src/index.html',
      hash: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    inline: true,
    host: '0.0.0.0',
    port: 9000
  }
};
