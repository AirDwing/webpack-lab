module.exports = {
  extends: [
    'eslint-config-dwing',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-airbnb/rules/react'
  ].map(require.resolve),
  plugins: [
    'react'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true
  }
};

