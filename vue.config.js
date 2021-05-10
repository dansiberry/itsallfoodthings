const prefixer = require('postcss-prefixer');
const tailwindcss = require ('tailwindcss');
const scssLoader = require('sass-loader');


module.exports = {
  publicPath: './',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          prefixer(),
          tailwindcss
        ]
      }
    }
  }
};
