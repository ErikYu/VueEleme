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
