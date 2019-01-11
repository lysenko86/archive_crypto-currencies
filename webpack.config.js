module.exports = {
    entry: __dirname + '/public/jsx/index.jsx',
    output: {
        path: __dirname + '/public/build/',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: [/(node_modules)/, /(public\/build)/],
                use: ['babel-loader']
            }
        ]
    }
}
