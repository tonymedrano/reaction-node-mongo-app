/********************************************************************
* File: /Users/tonymedrano/Desktop/reaction-node-mongo-app/webpack.config.js
* Project: /Users/tonymedrano/Desktop/reaction-node-mongo-app
* Created Date: Wednesday October 16th 2019
* Author: Tony Medrano <info@tonymedrano.com>
* -----------------------------------------------------
* Last Modified: Wednesday October 16th 2019 3:50:11 pm
* Modified By: Tony Medrano
* -----------------------------------------------------
* Copyright (c) 2019 Tony Medrano Development
**********************************************************************/

const path = require('path');

module.exports = {
    entry: './src/index.js', //. entry file under src directory.
    output: { //. this bundle all the entry files into a bundle.js in public directory.
        path: path.resolve('public'),
        filename: 'bundles.js'
    },
    module: {
        rules: [ //. rules for proccess
            {
                test: /\.js$/, //. Every file that ends with .js we run babel-loader
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' //. take care in transforming non-standards javascript we use. 
                }
            }
        ]
    }
}