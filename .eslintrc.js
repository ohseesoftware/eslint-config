
module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:import/errors',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-console': 'error',
    'no-debugger': 'error',
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './resources/js'],
          ['ziggy', './vendor/tightenco/ziggy/dist/js/route.js'],
        ],
        extensions: ['.js', '.json', '.vue'],
      },
    },
  },
  globals: {
    document: true,
    window: true,
  },
};
