module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'import/no-unresolved': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react', //react 관련된 것들 제일 위로
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react*', //react 관련된 것들 제일 위로
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@tanstack/*', // reactQuery 관련된 것 위로
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@apis/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@types',
            group: 'type',
            position: 'before',
          },
          {
            pattern: '@schema',
            group: 'type',
            position: 'before',
          },
        ],
        // pathGroupsExcludedImportTypes: ['react', 'react-router-dom'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.app.json',
      },
    },
  },
};
