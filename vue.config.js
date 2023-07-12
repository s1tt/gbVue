const { defineConfig } = require('@vue/cli-service');
const path = require('path');

// module.exports = defineConfig({

// });
module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/my-project/' : '/',
};
