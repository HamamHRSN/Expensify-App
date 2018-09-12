// entry -> output
const path = require('path');

// console.log(__dirname);
// console.log(path.join(__dirname, 'public'));


module.exports = {
   
    entry: './src/app.js' /*'./src/playground/redux-101.js'*/ /*'./src/playground/destructuring'*/ /*'./src/playground/redux-expensify.js'*/ /*'./src/playground/hoc.js'*/ /*'./src/playground/redux-hamam.js'*/,
    output: {
        path: path.join(__dirname, 'public'),
        filename:"bundle.js"
    },
    mode: 'production',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
      },
      performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
      },
      devtool: 'cheap-module-eval-source-map',
      devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
      }
};