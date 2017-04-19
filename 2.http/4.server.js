var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime'); //别人写好的模块 会自动去node_modules下寻找
/*var MIME = { //node没有提供处理content-type的方法
    '.css':'text/css',
    '.html':'text/html',
    '.js':'application/javascript',
    '.ico':'application/x-ico'
};*/
//第三方模块 先下载
//安装node后 会送一个npm node package manager,存储大量的第三方模块
//全局 -g 在命令行  本地 在代码中使用 （在本地安装前，你需要拿个小本记住你下载了哪些东西）
//在当前目录执行 npm init 会生成一个package.json文件，可以用来记录安装过哪些文件
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        var result = fs.readFileSync('./index.html');
        return res.end(result);
    }
    var flag = fs.existsSync('.'+pathname);
    if(flag) {
        //let attr =/(\.[a-zA-Z]+)$/.exec(pathname)[1];
        //  /public/css/index.css => text/css
        res.setHeader('Content-Type',mime.lookup(pathname)+`;charset=utf-8`);
        var result = fs.readFileSync('.'+pathname);
        res.end(result);
    }else{
        res.statusCode = 404;
        res.end('NOT FOUND');
    }
}).listen(8080,function () {
    console.log('start 8080');
});
