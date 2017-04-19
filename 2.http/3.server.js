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
        var result = fs.readFileSync('./index.html');// 由于文件被拖拽过，webStorm 有了缓存，重新打开当前目录
        return res.end(result);
    }
    //  如果文件不存在
    // 尽量不用try catch ，能不发生错误 就不要让它发生错误
    // 读取之前要先“判断文件是否存在” 如果存在在读取，不存在 告诉他404
    var flag = fs.existsSync('.'+pathname);
    if(flag) {
        let attr =/(\.[a-zA-Z]+)$/.exec(pathname)[1];
        res.setHeader('Content-Type',`${MIME[attr]};charset=utf-8`);
        var result = fs.readFileSync('.'+pathname);
        res.end(result);
    }else{
        res.statusCode = 404;
        res.end('NOT FOUND'); //200
    }
}).listen(8080,function () {
    console.log('start 8080');
});
