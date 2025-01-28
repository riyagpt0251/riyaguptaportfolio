const webpack = require('webpack');

module.exports = {
  // ... other configurations
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      zlib: require.resolve("browserify-zlib"),
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      buffer: require.resolve("buffer"),
      url: require.resolve("url/"),
      util: require.resolve("util/"),
      querystring: require.resolve("querystring-es3"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
