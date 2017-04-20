//ajax 就是传递数据的
let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');
let arr = [];
let listener = function (req,res) {
    let {query,pathname} = url.parse(req.url,true);
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        let content = fs.readFileSync('./manager.html');
        return res.end(content);
    }
    if(pathname == '/adduser'){
        var str = '';//发布订阅
        req.on('data',function (data) { //监听数据到来的事件，只要请求体中有数据 就会触发data事件，当数据全部接收完成后 会触发end事件
            str+=data;
        });
        req.on('end',function () {
            let u = JSON.parse(str);// 我们把接收来的数据拼成了字符串，所以最后的结果肯定是字符串，我们需要JSON.parse
            arr.push(u);
            res.end(JSON.stringify(arr)); //将最新的用户列表返回回去
        });
        return; //为了防止继续向下执行
    }
    //后面这段逻辑是为了处理html引用的其他文件
    let flag = fs.existsSync('.'+pathname);
    if(flag){
        res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        let content = fs.readFileSync('.'+pathname);
        return res.end(content);
    }else{
        res.statusCode=404;//favicon.ico not found 原因是当前目录下不存在 ，我们手动返回了404
        res.end();
    }
};
http.createServer(listener).listen(8080);