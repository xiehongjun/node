let http = require('http');
//操作文件
let fs = require('fs'); //filesystem 内置模块
let server = http.createServer(function (request,response) {
    //如果客户端想要的是css 要根据路径返回不同的内容 如果要的是css 我们要返回css文件
    //获取请求的路径 看要的是谁，返回对应的结果
    var url = request.url;//请求的路径 默认的路径是/
    if(url == '/'){
        response.setHeader('Content-Type','text/html;charset=utf-8');
        //不会只显示一个字符串，我们想返回一个html
        //读出对应的index文件，将读到的内容写回到客户端中
        var result = fs.readFileSync('index.html');
        //result代表读取后的文件内容
        response.end(result);
    }
    if(url == '/index.css'){

    }

});
server.listen(80,function () {
    console.log('成功');
});
