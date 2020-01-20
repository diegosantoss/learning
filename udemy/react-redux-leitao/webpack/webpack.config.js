const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptmizeCSSAsetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
 mode: modoDev ? 'development' : 'production',
 entry: './src/principal.js' ,
 output: {
   filename: 'principal.js',
   path: __dirname + '/public'
 },
 devServer: {
   contentBase: "./public",
   port: 9000
 },
 optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
       new OptmizeCSSAsetsPlugin({})
    ]
 },
 plugins: [
   new MiniCssExtractPlugin({
     filename: "estilo.css"
   })
 ],
 module: {
   rules: [
    //  css
    {
      test: /\s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        //'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    // images
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader?name=[name].[ext]']
    }
  ]
 }
}