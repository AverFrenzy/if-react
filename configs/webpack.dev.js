const path = require('path');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');

const source = path.resolve(__dirname, '../src');

module.exports = merge(commonConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: source,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                    },
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        devMiddleware: {
            publicPath: "/",
        },
        historyApiFallback: true,
        hot: true,
        open: true,
    }
});
