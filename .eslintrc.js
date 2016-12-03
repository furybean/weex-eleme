module.exports = {
  'extends': 'elemefe',
  'plugins': ['html'],
  'processors': {
    '.we': require('eslint-plugin-html').processors['.we']
  },
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  }
};