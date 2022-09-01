const path = require('path');

module.exports = {
  devtool: false,
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main_2022-09-01.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
