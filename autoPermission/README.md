# auto-permission

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# 自己写一个轮子 （弹框）
1.新建一个弹框的vue,里面放弹框的内容的html(里面可以自定义data mathods)
2.在lib里自定义一个js文件，使用vue.extend() 构造一个轮子的构造器 挂载到el上  将此时的dom  append 到body下   构造函数加载vue的原型链上  并导出
3.在main.js下导入新建的轮子 并使用Vue.use 注册就可以直接this.$使用了

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
