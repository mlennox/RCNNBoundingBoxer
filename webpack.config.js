import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { createLogger } from './logger/'

var logger = createLogger('webpack','config')

const webpack_config = {
    name: 'RCNN',
    target: 'web',
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx']
    },
    module: {}
}

webpack_config.entry = {
    app: __dirname + '/app/app.js'
    // , vendor: []
}

webpack_config.output = {
    path: __dirname + '/build/ui/',
    filename: 'bundle.js'
}

webpack_config.module.loaders = [
    {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
            presets: ['es2015', 'stage-3', 'react']
        }
    },
    {
        test: /\.json$/,
        loader: 'json'
    }
]