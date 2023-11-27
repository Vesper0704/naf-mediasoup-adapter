const path = require("path");

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'mediasoup-adapter-dev.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname), // 指定静态文件目录
        },
        port: 3000, // 服务器端口号
        hot: true, // 启用热模块替换
        open: true, // 自动打开浏览器
    
    },
    mode: 'development',
    module: {
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
