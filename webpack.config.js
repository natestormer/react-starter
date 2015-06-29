var webpack      = require('webpack');
var autoprefixer = require('autoprefixer-core');
var path         = require('path');

var npmPath = path.resolve(__dirname, 'node_modules');
var config  = {
    sassOptions  : (
        '?outputStyle=nested&includePaths[]=' + npmPath
    )
};

module.exports = {
    entry : [
      'webpack/hot/only-dev-server',
      './app/app.js',
      'webpack-dev-server/client?http://localhost:9001'
    ],
    output : {
        path     : __dirname + '/build',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test    : /\.js?$/,
                loaders : ['react-hot', 'babel'],
                exclude : /node_modules/
            },
            {
                test    : /\.js$/,
                exclude : /node_modules/,
                loader  : 'babel-loader'
            },
            {
                test    : /\.scss$/,
                loader  : 'style!css!postcss!sass' + config.sassOptions,
                include : /scss/
            },
            {
                test   : /\.css$/,
                loader : 'style-loader!css-loader'
            }
        ]
    },
    resolve : {
        extensions : ['', '.js', '.jsx', '.css', '.scss']
    },
    plugins : [
      new webpack.NoErrorsPlugin()
    ],
    postcss : function() {
        return [autoprefixer];
    }

};
