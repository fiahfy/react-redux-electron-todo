import fs from 'fs';
import config from './webpack.config.base.babel';

const nodeModules = fs.readdirSync('node_modules')
  .filter(dir => dir !== '.bin');

export default {
  ...config,
  target: 'electron-renderer',
  entry: './renderer.js',
  output: {
    path: `${__dirname}/app/assets/`,
    publicPath: './assets/',
    filename: 'js/renderer.js',
    libraryTarget: 'commonjs2',
  },
  externals: nodeModules,
};
