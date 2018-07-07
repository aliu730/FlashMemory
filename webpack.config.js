const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, './dist/public'),
    filename: 'flashBundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        exclude: '/node_modules/',
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        },
        test: /\.jsx?$/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};