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
    let result = fs.readFileSync(FILE_NAME,'utf8');
    result = result.length == 0?[]:JSON.parse(result);
    let final = {code:0,msg:'成功',data:''};
    if(pathname == '/getList'){
        final.data = result;
        final.msg = '亲，查询成功了';
        res.setHeader('Content-Type','text/json;charset=utf-8');
        res.end(JSON.stringify(final));
        return;
    }
    if(pathname == '/removeInfo'){
        let id = query.id;
        final.msg = '删除失败';
        final.code = 1;
        for(let i = 0; i<result.length;i++){
            let data = result[i];
            if(data.id == id){
                result.splice(i,1);
                fs.writeFileSync(FILE_NAME,JSON.stringify(result));
                final.msg = '删除成功';
                final.code = 0;
                break;
            }
        }
        res.setHeader('Content-Type','text/json;charset=utf-8');
        res.end(JSON.stringify(final));
        return;
    }

    //增加用户
    if(pathname == '/addInfo'){
        //接收请求体中的数据
        let str = '';
        req.on('data',function (data) { //数据到来时触发的函数
            str+=data;
        });
        req.on('end',function () {
            let u = JSON.parse(str); //将u放到result中
            //如果id有 则取数组中最后一项的id +1 否则就是没有数据 直接给1即可;
            u.id = result.length == 0?1:result[result.length-1].id+1;
            result.push(u);
            fs.writeFileSync(FILE_NAME,JSON.stringify(result));
            res.setHeader('Content-Type','text/json;charset=utf-8');
            final.msg = '增加成功'; //{code:0,msg:'增加成功',data:''}
            res.end(JSON.stringify(final));
        });
        return;
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