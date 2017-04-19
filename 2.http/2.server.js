var http = require('http');
var url = require('url');
var fs = require('fs');
var MIME = {
    '.css':'text/css',
    '.html':'text/html',
    '.js':'application/javascript',
    '.ico':'application/x-ico'
};
http.createServer(function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        var result = fs.readFileSync('./index.html');
        return res.end(result);
    }
    // /public/css/index.min.css
   /* let index = pathname.lastIndexOf(".");
    let attr = pathname.substr(index);*/
    let attr =/(\.[a-zA-Z]+)$/.exec(pathname)[1];
    res.setHeader('Content-Type',''+MIME[attr]+';charset=utf-8');
    var result = fs.readFileSync('.'+pathname); //如果文件不存在，读取会报错， 可以返回一个NOT FOUND
    res.end(result);
}).listen(8080,function () {
    console.log('start 8080');
});
