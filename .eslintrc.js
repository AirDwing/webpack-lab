/*
相关模块:
    "babel-eslint": "^7.2.3",
    "eslint": "^4.3.0",
    "eslint-config-dwing": "^1.1.0",
    "eslint-plugin-jsx-a11y": "^6.0.2",
    "eslint-plugin-react": "^7.1.0"
 */

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

