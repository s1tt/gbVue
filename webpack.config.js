const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

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
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Опционально: задайте предельный размер для включения изображений непосредственно в код (base64)
              name: 'images/[name].[hash:8].[ext]' // Опционально: используйте хешированные имена для изображений
            }
          }
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
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: 'src/assets/img', to: 'images' }
    //   ]
    // })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './src')
    },
    compress: true,
    port: 9000
  }
};
