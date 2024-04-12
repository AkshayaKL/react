const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: './src/index.jsx',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',

    },
  plugins: [
      new HTMLWebPackPlugin({
        template: "./src/index.html"
      })
  ],

  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    modules: [
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "node_modules"),
    ],
},


 module:{

    rules:[{

      
        test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:{
                loader: "babel-loader",
                options: {
                    presets:['@babel/preset-env', '@babel/preset-react']
                }
            }
       
    }]
 }
}