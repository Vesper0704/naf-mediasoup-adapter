const path = require("path");

module.exports = {
    entry  : './src/index.js',
    devtool:'inline-source-map',
    output : {
        path     : path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename : 'mediasoup-adapter.js'
    },
    mode: 'development',
    module : {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
