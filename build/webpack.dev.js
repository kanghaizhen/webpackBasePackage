const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


module.exports = {
  entry: {
    app: './src/index.js'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: "[name].chunk.js"
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: "/node_modules/"
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf|eot|woff|woff2)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name:'images/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../'),
    historyApiFallback: true,
    inline: true,
    host: HOST || 'localhost',
    port: PORT || 8081
  }
};
