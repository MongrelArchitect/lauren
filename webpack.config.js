const path = require('path');

module.exports = {
  devtool: false,
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main_2023-03-04.js',
    path: path.resolve(__dirname, 'dist'),
    hashFunction: 'xxhash64',
  },
};
