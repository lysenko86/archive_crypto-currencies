module.exports = {
    entry: [
        'webpack-dev-server/client/?http://localhost:8080',
        './public/jsx/app.jsx'
    ],
    output: {
        publicPath: 'public/build',
        path: __dirname + '/public/build/',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: [/(node_modules)/, /(public\/build)/],
                use: ['react-hot-loader/webpack', 'babel-loader']
            }
        ]
    }
}
