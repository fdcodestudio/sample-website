const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './public',
    openPage: 'http://127.0.0.1:8080',
    open: true,
    host: '0.0.0.0',
    port: 8080
  },
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'public'),
    clean: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: './src/favicon.ico',
      template: './src/views/home.ejs',
      data: {
        title: 'Jasa Pembuatan Website',
        page: 'home',
        packages: require('./src/json/packages.json'),
        faq: require('./src/json/faq.json')
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'portfolio.html',
      favicon: './src/favicon.ico',
      template: './src/views/portfolio.ejs',
      data: {
        title: 'Portfolio',
        page: 'portfolio',
        projects: require('./src/json/projects.json')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ejs$/, 
        use: {
          loader: 'ejs-compiled-loader',
          options: {
            htmlmin: true,
            htmlminOptions: {
              removeComments: true
            }
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          context: 'src',
          name: '[path][name].[ext]'
        }
      }
    ]
  }
};