
## 知乎日报 vuejs
---

### **简介**

---

##### **zhihu-daily-byVuejs** 是用*vue.js* *vue-router* *node.js* 开发的知乎日报 采用了*vue-cli* 和 *webpack*进行打包
### 功能包括

---

* 查看最新消息
* 查看主题列表
* 查看主题内容
* 查看文章详情

### API

---

#### api来源于 [izzyleung](https://github.com/izzyleung/ZhihuDailyPurify) 并使用node.js进行二次封装， [接口说明](https://github.com/GaryChangCN/zhihu-daily-byVuejs/tree/master/server/readme.md) 项目灵感来源于 [hilongjw](https://github.com/hilongjw/vue-zhihu-daily?utm_source=tuicool&utm_medium=referral) 不同之处是我没有使用`vuex`
#### *注* node.js服务器监听的是8088接口 我这里用了nginx来反向代理 匹配规则是 `~ ^\/tiny-` 当然，你也使用我[Demo](http://zhihu.garychang.cn)提供的接口（支持cors跨域） 但是我不建议你这样做，因为demo所在服务器带宽非常低
##### 图片会提示图片只允许在知乎使用 我目前没有好的解决方式，若直接使用api返回的图片地址，知乎会直接返回`403`，我这里使用了node来代理更改referer头获取图片，但是使用一会儿后就不行了，准备采用iframe嵌套访问图片当然，有好的解决盗链的方法可以教教我。
### Demo

---

#### [Demo地址](http://zhihu.garychang.cn) 建议使用手机查看或者F12 DevTool 手机模式 **仅供测试**

### 使用

---

```
node app.js
npm install
npm start //webpack-dev-server
```
### 之后

---

#### 我会完善获取更多消息，分类评论及解决图片问题

### 截图

---

![图片一](http://7xw4hd.com1.z0.glb.clouddn.com/255658052871800691.jpg)

---


![图片二](http://7xw4hd.com1.z0.glb.clouddn.com/77564782373712182.jpg)

### License
---

[MIT](https://opensource.org/licenses/MIT)
