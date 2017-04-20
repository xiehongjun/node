let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true); // /user?id=1 {id:1} query.id
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        let result = fs.readFileSync('./1.clock.html');
        return res.end(result);
    }
    if(pathname == '/getclock'){
        let time = new Date().toLocaleString();
        res.setHeader('Content-Type','text/json;charset=utf-8');
        res.end(JSON.stringify({'时间':time}))
    }
    let flag = fs.existsSync('.'+pathname);
    if(flag){
        res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        let result = fs.readFileSync('.'+pathname);
        return res.end(result);
    }else{
        res.statusCode = 404;
        res.end('NOT FOUND');
    }
}).listen(3001);