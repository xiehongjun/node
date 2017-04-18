//搭建服务，封装一个模块来实现http 内置模块
//1.服务端没有任何兼容性问题
//如果node代码没有提示 需要配置npm选项
//不支持es6语法，setting -> language ->javascript ->es6
let http = require('http');
//创建服务端
//request 代表的是客户端
//response 代表的是服务端
// 服务端 一直要监听 客户端的请求
let server = http.createServer(function (request,response) {
    //浏览器发送请求 就会执行这个函数
    console.log('welcome');
    //如果 response没有调用end方法，状态就是pending
    response.write('hello');// 给你写点东西
    response.end('88');//挂电话时 可以留点遗言,只会调用一次，end一定是最后调用
});
//本机的ip地址  127.0.0.1:3000 = localhost:3000
server.listen(3000,function () { //监听端口，监听成功后会执行此函数
    console.log('3000 start');
});//每次改动服务端代码 需要重新启动服务