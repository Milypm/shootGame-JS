/* eslint-disable import/no-unresolved */
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: 'bundle.min.js',
  },
  devtool: false,
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './src/assets', to: 'assets' }],
    }),
  ],
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};