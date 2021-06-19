module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'prettier/prettier':'error',
    'react/jsx-filename-extension':[
      'warn',
      {
        extensions: ['.jsx','.js']
      },
    ],
    'import/prettier-default-export': 'off',
  },
};
