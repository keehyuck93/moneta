// @see: https://commitlint.js.org/#/reference-configuration

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [2, 'always', ['core', 'ui', 'api', 'db', 'docs', 'config']],
  },
};
