const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

config.plugins.push(new webpack.HotModuleReplacementPlugin())

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchContentBase: true,
  hot: true,
  inline: true,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(4000, 'localhost', function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at http://localhost:4000')
})
