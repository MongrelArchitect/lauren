const path = require('path');

module.exports = {
  devtool: false,
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main_2023-05-24.js',
    path: path.resolve(__dirname, 'dist'),
    hashFunction: 'xxhash64',
  },
};
