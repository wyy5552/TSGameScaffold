module.exports = {
    root: true,
    env: {
        'browser': true,
        'es2020': true,
        'node': true
    },
    parserOptions: {
        project: './tsconfig.json'
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],

    extends: ['airbnb-typescript/base'],
    // 如果有 js 和 ts 需要分开指定的规则，就 js 写 rules 里，ts 写 overrides 里
    overrides: [{
        // enable the rule specifically for TypeScript files
        'files': ['*.ts'],
        'rules': {
            // 强制分号：开启，自动修正
            'semi': ['error', 'always'],
        }
    }],
    rules: {
        "@typescript-eslint/indent": ["error", 4],
        "indent": ["error", 4],
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "max-classes-per-file": ["error", 2],
        "no-underscore-dangle": 0,
        "class-methods-use-this": 1 // 静态方法的使用场景： https://segmentfault.com/q/1010000011602429
    },
    // 定义全局变量
    globals: {
        'Global': true,
        'CC_EDITOR': true
    }
};
