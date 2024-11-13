import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
        },
    },
    {
        languageOptions: {
            globals: globals.node,
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
        },
    },
];
