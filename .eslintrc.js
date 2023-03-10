// ESlint 检查配置
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended'],
  rules: {
    quotes: ['error', 'single'], // 字符串必须是单引号
    semi: ['error', 'never'], // 禁止使用分号
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: true
      }
    ]
  }
}
