let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');
//http是内置模块用来创建服务的，服务：固定ip 要有一个特定端口号
let server = http.createServer(function (req,res) {
    //获取请求的url路径，根据路径响应不同内容
    //req.url是包括？后面的参数，我们判断只想通过?前面的路径来判断，响应的路径
    let pathname = url.parse(req.url,true).pathname;
    let query = url.parse(req.url,true).query;
    if(pathname === '/'){//如果默认访问，则返回/路径
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }
    else if(pathname === '/clock'){//动态逻辑
        let timer = new Date().toLocaleString();
        res.end(JSON.stringify({timer}));
    }
    else{ //返回静态文件的  css js ...
        fs.exists('.'+pathname,function (flag) { //判断文件是否存在,flag则为存在或者不存在
            if(flag){
                //res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('NOT FOUND');
            }
        });
    }


});
server.listen(3000);