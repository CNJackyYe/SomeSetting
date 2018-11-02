module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
  }
};
