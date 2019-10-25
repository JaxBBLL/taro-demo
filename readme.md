# taro框架搭建的小程序（用于百度小程序）

## 介绍

Taro 是一套遵循 React 语法规范的 多端开发 解决方案，使用 Taro，可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动小程序、H5、React-Native 等）运行的代码。

* taro: https://taro.aotu.io/
* taro-ui: https://taro-ui.aotu.io/
* react: https://react.docschina.org/

## 项目目录

使用taro-cli工具生成代码

```bash
├── dist                           // 构建打包生成部署文件
├── config                         // 构建配置相关
├── src                            // 源代码
│   ├── assets                     // 静态资源
│   ├── pages                      // 页面视图（路由）
│   ├── styles                     // scss文件
│   ├── utils                      // 工具目录
│   │      ├── dictionary.js       // 公共枚举类型
│   │      ├── index.js            // 工具函数
│   │      ├── request.js          // 网络请求封装
│   ├── app.scss                   // scss样式
│   │── app.js                     // 入口文件
│   ├── index.html                 // html模板
├── .eslintrc                      // eslint 配置项
├── project.config.json            // 微信小程序配置项
├── project.swan.json              // 百度小程序配置项
└── package.json                   // package.json
```

## 注意问题

### JS 编码必须用单引号

在 Taro 中，JS 代码里必须书写单引号，特别是 JSX 中，如果出现双引号，可能会导致编译错误。项目已经使用.prettierrc.json配置格式化，请使用vscode并安装Prettier插件
