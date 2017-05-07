let http = require('http');
let fs = require('fs');
//http是内置模块用来创建服务的，服务：固定ip 要有一个特定端口号
let server = http.createServer(function (req,res) {
    //当请求到来时会执行此callback
    //req代表的就是客户端 res代表的是服务端
    //let result = fs.readFileSync('./index.html');
    //res.end(result);//res是可写流，可以调用write方法和end方法
    //1.将以上代码 改成readFile
    /*fs.readFile('./index.html',function (err,data) {
        if(err)console.log(err);
        res.end(data);
    });*/
    //2.改成用流的方式读取 可读流.pipe(可写流)
    res.setHeader('Content-Type','text/html;charset=utf8');
    fs.createReadStream('./index.html').pipe(res);
});
server.listen(3000);