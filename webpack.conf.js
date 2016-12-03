require('webpack');
require('weex-loader');

const path = require('path');
const fs = require('fs');
const entry = {};
const walk = function(dir, root) {
  const directory = path.join(__dirname, root, dir);
  fs.readdirSync(directory)
    .forEach(function(file) {
      const fullpath = path.join(directory, file);
      const stat = fs.statSync(fullpath);

      if (stat.isFile() &&
        path.extname(fullpath) === '.we') {
        const name = path.join(dir, path.basename(file, '.we'));
        entry[name] = fullpath + '?entry=true';
      } else if (stat.isDirectory()) {
        const subdir = path.join(dir, file);
        walk(subdir, root);
      }
    });
};

walk('./', 'src');

module.exports = {
  entry: entry,
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    preLoaders: [
      {
        test: /\.js(\?[^?]+)?$/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loaders: ['weex-loader', 'eslint']
      }, {
        test: /\.js(\?[^?]+)?$/,
        loader: 'babel?presets[]=es2015!eslint'
      }, {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url?limit=25000'
      }
    ]
  }
};
