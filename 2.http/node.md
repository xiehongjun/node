## url模块
是node中自带的一个模块，解析路径的
```
let url = require('url');
将路径拆分成一个对象，true的参数会将查询字符串转换成一个对象
let urlObj = url.parse(req.url,true);
let pathname = urlObj.pathname 端口号到问好之间的内容 http://www.baidu.com"/s"?a=1
let query = urlObj.query  查询字符串 a=1 =>{a:1}

let {pathname,query} =  url.parse(req.url,true);
```

## 解构赋值
把对象中的属性 一个个拿出来

## 模板字符串

## 安装第三方模块
```
npm init
```
## 第二部下载文件 jquery ejs mime
--save 开发上线都需要
```
npm install mime --save  安装
npm uninstall mime --save 卸载vv
```
--save-dev 开发时使用 ，上线不使用
 
> 安装后会产生一个node_modules文件，不要更改文件名。


## npm init 
- 当前项目名字，不能有大写 空格 中文，不能叫你要安装的模块
- package.json里面不能有任何的注释

## mime模块
这是一个别人写好的第三方模块 用来处理文件类型
```
npm init
npm install mime --save
require('mime').lookup('/index.css') => text/css
```

## 自动安装
自己的代码发给别人时可能不会传递node_modules文件,由于package.json已经记录了可以通过 npm install 重新找回进行安装。

## http动词
## GET 获取资源 查询
浏览器只能发get请求
1.GET和POST的区别  
2.两个都不安全，相对post安全一些
3.GET参数都是从url传递 POST通过请求体传递。
## POST 发送资源 保存
## DELETE 删除资源 删除
## PUT 修改资源  修改     
## HEAD
## OPTIONS 预发射，一般在发送post请求之前发送(跨域)

## 访问google商店下载插件
- 默认需要翻墙，greenvpn lattern 绿贝
- 更多-> 扩展程序 -> 获取更多扩展程序 jsonviewer 二维码 调试工具