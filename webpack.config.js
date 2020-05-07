const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
