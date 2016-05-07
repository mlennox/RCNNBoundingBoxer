module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname + '/build/ui/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [],
                exclude: [/node_modules/],
                loader: 'babel',
                query: {presets: ['es2015', 'stage-3', 'react']}
            }
        ]
    }
}