//1.如果 客户端请求的东西有 ，读出来内容，写回到客户端
//创建服务，
//1.配置node代码提示 settings->npm
//2.配置es6语法支持 settings-> language
//vscode  webstorm

//1.创建服务端 创建http服务，node提供了一些模块(核心模块) http 第三方模块
let http = require('http');//引用http模块
let fs = require('fs');
let listener = function (req,res) { //浏览器访问服务端,就会执行这个函数，服务端会一直等待着客户端的到来
    //还要告诉客户端响应的内容是utf8格式
    let result = fs.readFileSync('./index.html');
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end(result);//字符串和buffer类型
};
http.createServer(listener).listen(3000); //启动一个服务，ip默认本机localhost  访问通过ip+端口号 localhost:3000
//favicon.ico 这个是浏览器默认请求的图标，看心情请求