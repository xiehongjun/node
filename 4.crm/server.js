//1.如果 客户端请求的东西有 ，读出来内容，写回到客户端
//创建服务，
//1.配置node代码提示 settings->npm
//2.配置es6语法支持 settings-> language
//vscode  webstorm

//1.创建服务端 创建http服务，node提供了一些模块(核心模块) http 第三方模块
let http = require('http');//引用http模块
let fs = require('fs');
let url = require('url');//处理路径的 可以将路径转换成对象转化后的对象pathname属性就是真正的请求路径,query 就是?号的值，query默认是字符串，需要转换成对象提供参数true可以转化成对象
let mime = require('mime');
// /index.css -> text/css /index.js ->application/javascript
let listener = function (req,res) { //浏览器访问服务端,就会执行这个函数，服务端会一直等待着客户端的到来
    //还要告诉客户端响应的内容是utf8格式
   /* let urlObj = url.parse(req.url,true);
    let pathname = urlObj.pathname;
    let query = urlObj.query;*/
    let {pathname,query} = url.parse(req.url,true);
    if(pathname == '/'){
        let result = fs.readFileSync('./index.html');
        res.setHeader('Content-Type','text/html;charset=utf-8');
        return res.end(result);//字符串和buffer类型
    }
    //使用第三方模块，别人写好的，下载
    //下载第三方模块之前 初始化一个package.json 用来记录下载的模块
    // npm init -y
    // npm install mime --save 记录到package.json
    // 如果浏览器访问 /favicon.ico
    try {
        res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        let result = fs.readFileSync('.'+pathname);
        res.end(result);
    }catch(e){
        //如果有异常 说明服务器没有这个资源，告诉浏览器 404 not found
        res.statusCode = 404;
        res.end('not found');
    }
};
http.createServer(listener).listen(3000); //启动一个服务，ip默认本机localhost  访问通过ip+端口号 localhost:3000
//favicon.ico 这个是浏览器默认请求的图标，看心情请求