# HELP file
## Express
express是一个基于Node.js平台的极简灵活的Web应用框架；
[Express官网](http://www.expressjs.com.cn/)
#### 路由
路由：如何定义应用的端点以及如何相应客户端的请求。

基本结构：`app.METHOD(path, [callback...], callback)`,

METHOD是一个请求方法；path是服务器上的路径；callback是路由匹配时要执行的函数；
````javascript
var express = require('express');
var app = express();

// respond with 'hello' when a GET request is made to the honepage
// res: response object
app.get('/', function(req, res) {
  res.send('hello')
})
````
#### 路由方法
路由方法源于HTTP请求方法，与express实例相关联；GET请求和POST请求；
例如：get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, 和 connect。
#### 路由路径
可以是字符串，字符串模式和正则表达式；
#### 响应方法
|方法|描述|
|:--|:--|
|res.download()|提示下载文件|
|res.end()|终结相应处理流程|
|res.json()|发送一个json格式的相应|

## vue-resource应用

## css-sticky布局
#### 布局思路
````html
<div class='detail-wrapper'>
  <div class='detail-main'></div>
</div>
<div class='detail-close'></div>
````
````css
.detail-wrapper{
  min-height: calc(~'100% - 32px');
  .detain-main{
    margin-top: 32px;
    padding-bottom: 64px;  /*底部的区域需要的高度*/
  }
}
.detail-close{
  position: relative;
  margin: -64px auto 0 auto;
  clear: both;
}
````

## FLEX布局
[FLEX语法简介](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)
#### 基本概念
1. 主轴
2. 交叉轴
3. 容器
4. 项目

#### 容器的属性
1. flex-direction：决定主轴的方向；
````css
.box{
  flex-direction: row | row-reverse | column | column-reverse;
}
````
2. flex-wrap：如果一条轴线排不下，如何换行
````css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
  /* nowrap: default，不换行
  ** wrap: 换行，第一行在上方
  ** wrap-reverse: 换行，第一行在下方
  */
}
````
3. flex-flow：前两者的简写形式
4. justify-content：项目在主轴上的对其方式
````css
.box{
  justify-content: flex-start | flex-end | center | space-between | space-around
  /* flex-start: default，左对齐
  ** flex-end: 右对齐
  ** center: 居中
  ** space-between: 两端对齐，项目之间的间距相等
  ** space-around: 每个项目两侧的间距相等；即项目之间的间隔比两边的间隔大一倍
  */
}
````
5. align-items：定义项目在交叉轴上如何对齐
````css
.box{
  align-items: flex-start | flex-end | center | baseline | stretch
  /* stretch: default，如果项目未设置高度或设为auto，将占满整个容器的高度。
  ** flex-start: 交叉轴的起点对齐
  ** flex-end: 交叉轴的终点对齐
  ** center: 交叉轴的中点对齐
  ** baseline: 项目第一行文字的基线对齐
  */
}
````
6. align-content：定义多根轴线的对齐方式；
````css
.box{
  align-content: flex-start | flex-end | center | space-between | spave-sround | stretch
  /* flex-start: 与交叉轴的起点对齐
  ** flex-end: 与交叉轴的终点对齐
  ** center: 与交叉轴的中点对齐
  ** space-between: 与交叉轴的两端对齐，轴线之间的间隔均布
  ** space-around: 每根轴线两侧的间隔都相等
  ** stretch: default，轴线占满整个交叉轴
  */
}
````

#### 项目的属性
1. order：定义项目的排列顺序。数值越小排名越靠前，默认为0；
2. flex-grow：定义项目的放大比例。
````css
.item{
  flex-grow: < number >;
  /* 0: default，即使有剩余空间，也不放大
  ** 1: 如果所有的项目都是1，则会等分剩余空间
  ** 2: ...
  */
}
````
3. flex-shrink：定义项目的缩小比例，默认为1，即如果空间不足，该项目将缩小；
````css
.item{
  flex-shrink: < number >;
  /* 1: 如果空间不够，所有的项目都会等比例缩小；
  ** 0: 一个元素是0，其他是1，则一个0的元素不缩小，其他元素缩小
  */
}
````
4. flex-basis：分配多余空间之前，项目占据的主轴空间，默认auto，即项目本来的大小；
````css
.item{
  flex-basis: < length > | auto;
}
````
5. flex：是flex-grow，flex-shrink，flex-basis的简写；
````css
.item{
  flex: none | [ <flex-grow> <flex-shrink>? || <flex-basis> ];
  /* none: 0 0 auto
  ** auto: 1 1 auto
  */
}
````
优先使用这个属性，单独写浏览器会推算相关值
6. align-self：允许单个项目可以有跟其他项目不一样的对齐方式；继承于父元素的align-items属性
