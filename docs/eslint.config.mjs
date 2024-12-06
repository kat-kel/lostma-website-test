// eslint.config.mjs
import babelParser from '@babel/eslint-parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            semi: 'error',
            'prefer-const': 'error',
            'quotes': [2, 'single', { 'avoidEscape': true }],
            'indent': 2
        },
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    babelrc: false,
                    configFile: false,
                    presets: ['@babel/preset-env'],
                    parserOpts: {
                        plugins: ['jsx']
                    }
                }
            }
        },
    }
];