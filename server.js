//使用http模块，可以处理 客户端 和服务端的请求和响应
let http = require('http');// 这个模块 就是提供客户端和服务端链接的
//创建一个服务端
//node默认不支持gbk的编码格式，只支持utf8
let server = http.createServer(function (request,response) {//当浏览器真正访问服务端时执行的函数
    //当浏览器访问我们的服务器时执行的回调函数
    //1.服务端要告诉客户端，我给你内容是什么 write end 结束
    //2.响应内容时 要告诉浏览器你响应的内容是什么类型
    // text/plain text/html text/css application/javascript
    response.setHeader('Content-Type','text/plain;charset=utf8');
    response.statusCode = 200;//手动告诉浏览器当前状态码，一般采用规定的状态码 200 300 400 500
    //响应内容时普通的字符串,编码格式是utf8格式
    response.write('你好');
    response.end(); //代表响应完毕，将内容展示给客户端
//服务端要监听特定的端口 和 ip地址，监听成功后，会执行最后的回调函数
});
server.listen(8080,'127.0.0.1',function () {
    console.log('成功监听8080端口');
});
//监听成功后 等待客户端发送请求，我们需要通过浏览器 访问ip+ 端口号，来访问到服务端
