module.exports = {
    entry  : './src/index.js',
    output : {
        path     : __dirname,
        filename : './dist/mediasoup-adapter.min.js'
    },
    mode: 'production',
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