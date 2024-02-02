module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
                sourceType: 'module',
            },
            plugins: [
                'react',
                '@typescript-eslint/eslint-plugin',
                'import',
                'deprecation',
            ],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended-type-checked',
                'plugin:@typescript-eslint/stylistic-type-checked',
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                'plugin:unicorn/recommended',
                'plugin:import/recommended',
                'plugin:import/typescript',
                'plugin:jsx-a11y/recommended',
                'plugin:prettier/recommended',
                'plugin:@next/next/recommended',
                'next/core-web-vitals',
            ],
            settings: {
                react: {
                    pragma: 'React',
                    version: 'detect',
                },
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx'],
                },
                'import/resolver': {
                    typescript: {
                        alwaysTryTypes: true,
                    },
                    node: true,
                },
            },
            rules: {
                // todo: fix rules start
                '@next/next/no-img-element': 'off',
                '@typescript-eslint/await-thenable': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-misused-promises': 'off',
                '@typescript-eslint/no-shadow': 'off',
                '@typescript-eslint/no-unsafe-argument': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-enum-comparison': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/prefer-nullish-coalescing': 'off',
                '@typescript-eslint/require-await': 'off',
                'import/no-unused-modules': 'off',
                'jsx-a11y/alt-text': 'off',
                'jsx-a11y/anchor-is-valid': 'off',
                'jsx-a11y/click-events-have-key-events': 'off',
                'jsx-a11y/iframe-has-title': 'off',
                'jsx-a11y/no-noninteractive-element-interactions': 'off',
                'jsx-a11y/no-static-element-interactions': 'off',
                'no-constant-condition': 'off',
                'no-useless-escape': 'off',
                'react-hooks/exhaustive-deps': 'off',
                'unicorn/consistent-destructuring': 'off',
                'unicorn/consistent-function-scoping': 'off',
                'unicorn/prefer-module': 'off',
                'unicorn/prefer-query-selector': 'off',
                // todo: fix rules end
                'no-await-in-loop': 'error',
                // '@typescript-eslint/no-shadow': 'error',
                '@typescript-eslint/switch-exhaustiveness-check': 'error',
                '@typescript-eslint/ban-ts-comment': [
                    'error',
                    {
                        'ts-expect-error': 'allow-with-description',
                        'ts-ignore': false,
                        'ts-nocheck': true,
                        'ts-check': true,
                        minimumDescriptionLength: 3,
                    },
                ],
                // '@typescript-eslint/no-unused-vars': [
                //   'error',
                //   { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
                // ],
                // '@typescript-eslint/no-misused-promises': [
                //   'error',
                //   {
                //     checksVoidReturn: {
                //       attributes: false,
                //       arguments: false,
                //     },
                //   },
                // ],
                'unicorn/prevent-abbreviations': 'off',
                'unicorn/no-null': 'off',
                'unicorn/filename-case': 'off',
                // idiomatic styled-components uses `import styled from 'styled-components';`
                'import/no-named-as-default': 'off',
                'import/namespace': 'off',
                'import/newline-after-import': ['error', { count: 1 }],
                // 'import/no-unused-modules': [
                //   'error',
                //   {
                //     unusedExports: true,
                //     missingExports: true,
                //   },
                // ],
                'import/order': [
                    'error',
                    {
                        alphabetize: { order: 'asc' },
                        groups: [
                            'builtin',
                            'external',
                            'internal',
                            'parent',
                            'sibling',
                            'index',
                        ],
                        pathGroups: [{ pattern: '~/**', group: 'internal' }],
                        'newlines-between': 'always',
                    },
                ],
                'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
            },
        },
    ],
    root: true,
    env: {
        browser: true,
        node: true,
        jasmine: true,
        jest: true,
    },
    ignorePatterns: [
        'dist/*',
        '.eslintrc.js',
        'codegen.ts',
        'gql/generated.ts',
        'gql/fragments.ts',
        'package-lock.json',
        'next-env.d.ts',
    ],
};