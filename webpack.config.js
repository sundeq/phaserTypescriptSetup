const path = require('path');

module.exports = {
    entry: './src/app.ts',
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node-modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    output: {
        filename: 'game_min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development'
};