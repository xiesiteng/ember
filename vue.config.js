


module.exports = {
  lintOnSave: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    disableHostCheck: true,
    port: 8088,
    open: true,
    compress: false,
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://customer.scember.com',
//         target: 'http://wework.scember.com',
//         target: 'http://192.168.0.118',
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''    //代理的路径
        }
      }
    }
}
}