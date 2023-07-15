module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        'jest/globals': true,
    },
    parserOptions: {
        requireConfigFile: false,
        parser: '@babel/eslint-parser',
    },
    extends: [
        '@nuxtjs/eslint-config',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
    ],
    plugins: ['prettier', 'jest'],
    // add your custom rules here
    rules: {
        'vue/multi-word-component-names': 'off',
    },
}
