let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        let result = fs.readFileSync('./3.reqbody.html');
        return res.end(result);
    }
    if(pathname == '/aa'){
        //接受请求体
        //如果想从请求体中拿到数据 需要监听两个事件 on('data') on('end')
        //客户端会将数据一点点的发送到服务端上来
        let str = '';
        req.on('data',function (data) {
            str+=data;
        });
        //数据接收完毕 会触发end事件
        req.on('end',function () {
            console.log(str); //表单的数据接收后的形式是查询字符串
        });
    }
    /*if(pathname == '/baozi'){
        //req.url  = '/baozi?num=100' =>query:{num:100}
        let {bb,cc} = query;
        //只能传递json格式的字符串 ，才会被浏览器识别
        res.end(JSON.stringify({food:bb}));//服务端 只要返回的是字符串即可
    }
*/






    let flag = fs.existsSync('.'+pathname);
    if(flag){
        res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        let result = fs.readFileSync('.'+pathname);
        return res.end(result);
    }else{
        res.statusCode = 404;
        res.end('NOT FOUND');
    }
}).listen(3002);