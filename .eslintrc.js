module.exports = {
  extends: ['airbnb'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['*.config.js', '*.config.ts', '*.config.mjs'] }],
    'import/prefer-default-export': 'off',
  },
};
