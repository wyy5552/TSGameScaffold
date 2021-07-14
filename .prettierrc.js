/*
 * @Author: yourName
 * @since: 2021-07-09 10:26:14
 * @lastTime: 2021-07-13 17:29:04
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/.prettierrc.js
 */
module.exports = {
    // 一行最多 100 字符
    printWidth: 200,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 使用 2 个空格缩进
    tabWidth: 4,
    // 行尾需要有分号
    semi: true,
    // 使用单引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 末尾不需要逗号 'es5'  none
    trailingComma: 'es5',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 lf 结尾是 \n \r \n\r auto
    endOfLine: 'lf',
};
