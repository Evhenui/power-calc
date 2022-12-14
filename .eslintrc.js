module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    plugins: [],
    // add your custom rules here
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'arrow-spacing': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'prefer-const': 'warn',
        'vue/no-multiple-template-root': 'warn',
        'eol-last': 'off',
        'vue/no-unused-vars': 'warn',
        'no-useless-constructor': 'off',
        'unicorn/prefer-includes': 'warn',
        'operator-linebreak': 'off',
        'object-shorthand': 'off',
        'prefer-promise-reject-errors': 'warn',
        'no-lonely-if': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'import/named': 'warn',
        'array-callback-return': 'warn',
        'spaced-comment': 'off',
        'no-throw-literal': 'off',
        'require-await': 'off',
        'arrow-parens': 'off',
        'dot-notation': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/first-attribute-linebreak': 'off',
        'vue/attribute-hyphenation': 'off',
        'lines-between-class-members': 'off',
        'multiline-ternary': 'off',
        'no-use-before-define': 'warn',
        'comma-dangle': 'off',
        'vue/attributes-order': 'off',
        'space-before-function-paren': 'off',
        'vue/script-indent': 'off',
        indent: 'off',
        'vue/html-indent': 'off',
        'no-tabs': 'off',
        'no-redeclare': 'off',
        'no-multiple-empty-lines': 'off',
        'padded-blocks': 'off',
        'no-multi-spaces': 'off',
        'no-return-assign': 'off',
        'object-curly-spacing': 'off',
        'no-unused-expressions': 'off',
        'vue/html-self-closing': 'off',
        'import/order': 'off',
        semi: 'off',
        curly: 'off',
        quotes: 'off',
        'no-undef': 'off',
        'vue/no-unused-components': ['warn'],
        'vue/html-closing-bracket-spacing': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': ['warn'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/no-inferrable-types': 'off', // Closed type inference
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/ban-types': 'warn',
        'no-trailing-spaces': 'off',
        'quote-props': 'off'
    }
}
