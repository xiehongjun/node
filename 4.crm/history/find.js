let http = require('http');
let fs = require('fs');
let url = require('url');
let mime = require('mime');
const FILE_NAME = './data.json';
let listener = function (req,res) {
    let {pathname,query} = url.parse(req.url,true);
    if(pathname == '/'){
        let result = fs.readFileSync('./index.html');
        res.setHeader('Content-Type','text/html;charset=utf-8');
        return res.end(result);
    }
    //先把所有用户都读出来
    //读文件，如果设置了utf8 读出来的都是字符串，需要手动转成对象
    let result = fs.readFileSync(FILE_NAME,'utf8');//最后我们要操作读出来的数据，所以必须要让读出的内容转换成字符串类型
    //如果没有用户读取到的是空字符串。如果没有 返回空数组;
    result = result.length == 0?[]:JSON.parse(result);
    let final = {code:0,msg:'成功',data:''}; //返回的结果
    //获取所有用户，
    if(pathname == '/getList'){
        final.data = result;
        final.msg = '亲，查询成功了';
        res.setHeader('Content-Type','text/json;charset=utf-8');
        res.end(JSON.stringify(final));
        return; //防止代码继续向下执行
    }
    try {
        res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        let result = fs.readFileSync('.'+pathname);
        res.end(result);
    }catch(e){
        res.statusCode = 404;
        res.end('not found');
    }
};
http.createServer(listener).listen(3000,function () {
    console.log('listen port  3000 success');
});