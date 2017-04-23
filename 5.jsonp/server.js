let url = require('url');
let http = require('http');
let fs = require('fs');
let mime = require('mime');
http.createServer(function (req,res) {
    let {pathname , query } = url.parse(req.url,true);
    if( pathname == '/'){
       res.setHeader('Content-Type','text/html;charset=utf-8');
       return  res.end(fs.readFileSync('./index.html'));
    }
    if(pathname == '/getTime'){
        let fnName = query.cb;//fnName = "b"
        let timer  = new Date().toLocaleString();
        res.setHekader('Content-Type','application/javascript;charset=utf-8');
        res.end(`${fnName}("${timer}")`); //es6不兼容，node 没有兼容性问题
    }
    if(pathname == '/getDate'){ //字符串
        let fnName = query.cb;//fnName = "b"
        let timer  = new Date().toLocaleString();
        res.setHeader('Content-Type','application/javascript;charset=utf-8');
        res.end(fnName+'("'+timer+'")');
    }
    if(pathname =='/getStudent'){ //对象
        let fnName = query.cb;
        let school = JSON.stringify({name:1,age:2});
        res.setHeader('Content-Type','application/javascript;charset=utf-8');
        res.end(fnName+'('+school+')')
    }
    try {
        res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        return  res.end(fs.readFileSync('.'+pathname));
    }catch(e){
        res.statusCode = 404;
        res.end('NOT FOUND');
    }
}).listen(8080);