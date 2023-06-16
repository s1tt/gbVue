const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, './src/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'] // Use both loaders
      },
      {
        test: /\.scss$/, // Match SCSS files
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader', // Translates CSS into CommonJS modules
          'sass-loader' // Compiles SCSS to CSS
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к вашему HTML-шаблону
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/vue.html', // путь к вашему HTML-шаблону
      filename: 'vue.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/blog.html', // путь к вашему HTML-шаблону
      filename: 'blog.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './src')
    },
    compress: true,
    port: 9000
  }
};
