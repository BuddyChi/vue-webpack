const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry:path.join(__dirname,"src","js","main.js"),
    output:{
        path:path.join(__dirname,"dist"),
        filename:"bundle.js"
    },
    devServer: {
        contentBase: "./",
        historyApiFallback: true,
        inline: true
      } ,
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",                
                },  
                exclude:/node_modules/
            },
            {
                test:/\.scss$/,
                use:[
                    {loader:'style-loader'},                    
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ],
                exclude:/node_modules/                
            }
        ]
    },
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } }
}