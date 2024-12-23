const path = import('path');

module.exports = {
  entry: './src/index.js', // your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    '@web3modal/connectors': '@web3modal/connectors'
  }
};