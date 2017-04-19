var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime'); //第三方需要下载
http.createServer(function (req,res) {
    //获取请求的路径 /s?a=1&b=2;
    let {pathname,query} =url.parse(req.url,true);
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        var result = fs.readFileSync('index.html');
        return res.end(result);
    }
    var flag = fs.existsSync(pathname.slice(1));
    if(pathname == '/gettime'){ //如果路径是/gettime 说明是前端发送的ajax
        var timer = new Date().toLocaleString();
        return res.end(JSON.stringify({timer})); //node中end方法不能返回对象或数字
    }
    if(flag){
        res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        var result = fs.readFileSync(pathname.slice(1));
        res.end(result);
    }else{
        res.statusCode = 404;
        res.end('NOT FOUND');
    }
    //时钟的例子
}).listen(3000);
