let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');
let books = [{id:1,bookName:'vue',price:30}];
let server = http.createServer(function (req,res) {
    let pathname = url.parse(req.url,true).pathname;
    let query = url.parse(req.url,true).query;
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/book'){ //客户端发送的路径只要是/book就在这里操作
        //对请求的不同方法进行操作 req.method 请求方法默认大写
        //curl -X POST http://localhost:3000/book
        switch (req.method){
            case 'GET': //获取数据
                if(query.id){ //获取一条

                }else{ //获取所有
                    res.end(JSON.stringify(books));
                }
                break;
            case 'POST': //增加数据
                break;
            case 'DELETE': //删除数据
                break;
            case 'PUT': //修改数据
                break;
        }
    }
    else{
        fs.exists('.'+pathname,function (flag) {
            if(flag){
               fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('NOT FOUND');
            }
        });
    }
});
server.listen(3000);