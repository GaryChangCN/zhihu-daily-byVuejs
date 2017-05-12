## 知乎日报 vuejs版
开发框架：vue2.0全家桶(`vue.js`,`vuex`,`vue-router`)
构建工具: `webpack`
css预编译工具: `less`
babel:`preset-es2015`,`stage-3`,由于使用了 `async/await`，所以需要`babel-polyfill`
>此版本不包括离线下载、查看评论、没有做错误处理等。

## 功能包括
* 查看最新消息
* 查看主题列表
* 查看主题内容
* 查看文章详情

## 预览
使用vue1.0开发的版本已经停止维护和预览。
<a href="http://garychang.cn/show/zh-vue2.html" target="_Blank">2.0版本demo预览</a>

## 使用
```
git clone git@github.com:GaryChangCN/zhihu-daily-byVuejs.git
yarn install
yarn run server
yarn run dev
```
在server.js中更改后端host地址。

## API
api来源于 [@izzyleung](https://github.com/izzyleung/ZhihuDailyPurify) 并使用node.js进行二次封装， 项目灵感来源于 [@hilongjw](https://github.com/hilongjw/vue-zhihu-daily?utm_source=tuicool&utm_medium=referral) 

### API使用，
所有uri格式相同除了把host改成了本地 `localhost:9999`

### tips
图片会提示图片只允许在知乎使用 我目前没有好的解决方式，若直接使用api返回的图片地址，知乎会直接返回`403`，我这里使用了node来代理更改referer头获取图片。使用方式是新建一个全局`filter` `image`。

## vue1.0
[分支1.0](https://github.com/GaryChangCN/zhihu-daily-byVuejs/tree/v1.0)

## 截图 
截图分为使用[1.0](#1.0版本)开发的版本和[2.0](2.0版本)开发的版本

### 2.0版本
![图片一](http://7xw4hd.com1.z0.glb.clouddn.com/zhihuvue2-1.png-scale50)
![图片二](http://7xw4hd.com1.z0.glb.clouddn.com/zhihuvue2-2.png-scale50)
![图片三](http://7xw4hd.com1.z0.glb.clouddn.com/zhihuvue2-3.png-scale50)

### 1.0版本
![图片一](http://7xw4hd.com1.z0.glb.clouddn.com/620552845619830166.jpg-scale50)
![图片二](http://7xw4hd.com1.z0.glb.clouddn.com/635505886232277358.jpg-scale50)
![图片三](http://7xw4hd.com1.z0.glb.clouddn.com/92529011503075773.jpg-scale50)

## License

[MIT](./LICENSE)
