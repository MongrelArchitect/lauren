const path = require('path');

module.exports = {
  devtool: false,
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main_2022-11-07.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
