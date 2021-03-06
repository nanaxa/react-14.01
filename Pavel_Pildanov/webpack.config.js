const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js" 
    },
    
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")})
    ],
    
    module: {
       rules: [
           {
               test: /\.(js|jsx)$/,
               include: path.resolve(__dirname, "src"), //меняем на src путь
               loader: 'babel-loader',
               exclude: /node_modules/,
               options: {
                 presets: ['@babel/env','@babel/react'],
                 plugins: [
                     [
                        "@babel/plugin-proposal-class-properties",
                        {
                            "loose": true
                        }
                     ]
                 ]
               },
           },
       ],
   },

   resolve: {
    extensions: [ '.jsx', '.js',]
  } 

}