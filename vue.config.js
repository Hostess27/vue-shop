const path = require('path')
module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@vue': path.resolve(__dirname, 'src/vue/'),
        '@components': path.resolve(__dirname, 'src/vue/components/'),
        '@pages': path.resolve(__dirname, 'src/vue/pages/'),
        '@js': path.resolve(__dirname, 'src/js/'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        sourceMap: true,
        prependData: `
          @import "@/styles/functions.scss";
        `,
      },
    },
  },
}
