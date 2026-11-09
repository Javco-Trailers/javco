import globals from 'globals'
import eslintJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import nextPlugin from '@next/eslint-plugin-next'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import betterTailwind from 'eslint-plugin-better-tailwindcss'

// Mirrors the findadoc monorepo conventions: ESLint flat config, typescript-eslint, @stylistic for formatting
// (no Prettier) and an accessibility plugin.
export default tseslint.config(
    {
        ignores: ['.next/**', 'node_modules/**', 'coverage/**', 'next-env.d.ts']
    },
    eslintJs.configs.recommended,
    ...tseslint.configs.recommended,
    jsxA11y.flatConfigs.recommended,
    {
        files: ['**/*.{ts,tsx,js,mjs,mts}'],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        },
        plugins: {
            '@next/next': nextPlugin,
            'react-hooks': reactHooks,
            '@stylistic': stylistic
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            ...reactHooks.configs.recommended.rules,

            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            eqeqeq: ['error', 'always', { null: 'always' }],
            complexity: ['error', { max: 40 }],
            'no-alert': 'error',
            'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-template': 'error',
            'arrow-body-style': 'error',

            '@stylistic/indent': ['error', 4],
            '@stylistic/jsx-indent-props': ['error', 4],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
            '@stylistic/jsx-quotes': ['error', 'prefer-double'],
            '@stylistic/semi': ['error', 'never'],
            '@stylistic/comma-dangle': ['error', 'never'],
            '@stylistic/max-len': ['error', { code: 130, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
            '@stylistic/linebreak-style': ['error', 'unix'],
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/operator-linebreak': ['error', 'before'],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }]
        }
    },
    // Tailwind class hygiene: canonical v4 names, consistent order, no unknown/conflicting/duplicate classes.
    {
        files: ['**/*.{ts,tsx}'],
        ...betterTailwind.configs.recommended,
        settings: {
            'better-tailwindcss': { entryPoint: 'app/globals.css' }
        },
        rules: {
            ...betterTailwind.configs.recommended.rules,
            'better-tailwindcss/enforce-consistent-line-wrapping': ['error', { printWidth: 130, indent: 4, group: 'never', preferSingleLine: true }],
            'better-tailwindcss/no-unknown-classes': 'error',
            'better-tailwindcss/enforce-canonical-classes': 'error',
            'better-tailwindcss/enforce-shorthand-classes': 'error'
        }
    }
)
