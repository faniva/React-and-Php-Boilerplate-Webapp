const path = require('path');
var webpack =  require('webpack');

module.exports = {
    context:  __dirname,
    devtool : 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/scripts.min.js'
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module : {
        loaders : [
            {

                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react','es2015']
                }

            }
        ]

    }

};