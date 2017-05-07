## 知乎日报 vuejs

`zhihu-daily-byVuejs` 是用 `vue.js` `vue-router` `node.js` 开发的知乎日报 采用了 `vue-cli` 和 `webpack`进行打包

## 使用

```
git clone git@github.com:GaryChangCN/zhihu-daily-byVuejs.git
yarn install
yran run server
yarn run dev
```

## to do

使用 `vuejs2.0` 重写，使用 vuex 管理数据流。更改跨域代理。

## 功能包括
* 查看最新消息
* 查看主题列表
* 查看主题内容
* 查看文章详情

## API

api来源于 [izzyleung](https://github.com/izzyleung/ZhihuDailyPurify) 并使用node.js进行二次封装， [接口说明](https://github.com/GaryChangCN/zhihu-daily-byVuejs/tree/master/server/readme.md) 项目灵感来源于 [hilongjw](https://github.com/hilongjw/vue-zhihu-daily?utm_source=tuicool&utm_medium=referral) 

### API使用，
所有uri格式相同除了把host改成了本地 `localhost:9999`

### tips
图片会提示图片只允许在知乎使用 我目前没有好的解决方式，若直接使用api返回的图片地址，知乎会直接返回`403`，我这里使用了node来代理更改referer头获取图片。使用方式是新建一个全局`filter` `image`。

## vue1.0

[分支1.0](https://github.com/GaryChangCN/zhihu-daily-byVuejs/tree/v1.0)

## Demo

[Demo地址](http://zhihu.garychang.cn) 建议使用手机查看或者F12 DevTool 手机模式

## 截图

截图是使用vue1.0构建的
![图片一](http://7xw4hd.com1.z0.glb.clouddn.com/620552845619830166.jpg)

![图片二](http://7xw4hd.com1.z0.glb.clouddn.com/635505886232277358.jpg)

![图片三](http://7xw4hd.com1.z0.glb.clouddn.com/92529011503075773.jpg)

## License

[MIT](./LICENSE)
