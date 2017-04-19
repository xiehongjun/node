// 模块：内置核心模块 ，第三方，文件模块
//1.定义模块，require使用模块，module.exports导出模块->commonjs
let http = require('http');
let fs = require('fs'); //file system
let url = require('url');
const MIME = { //做类型映射关系的
    '.css':'text/css',
    '.js':'application/javascript',
    '.ico':'application/x-ico',
    '.html':'text/html'
};
http.createServer(function (req,res) {
    //因为是客户端请求的路径，url
    //pathname只是 端口号到问号之前的部分
    let {pathname,query} = url.parse(req.url,true);//处理url的
    console.log(pathname);
    if(pathname == '/'){
        //读取的文件必须存在，不存在则报错
        let result = fs.readFileSync('./index.html');
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end(result);
    }
    // if(pathname=='/public/css/index.css'){
        //1.要取pathname的后缀，取完后再MIME对象中找到对应的类型，设置不同的头
        res.setHeader('Content-Type','text/css;charset=utf-8');
        let result = fs.readFileSync('.'+pathname);
        res.end(result);
    //}
    /*if(pathname == '/favicon.ico'){
        let result = fs.readFileSync('./favicon.ico');
        res.setHeader('Content-Type','application/x-ico;charset=utf-8');
        res.end(result);
    }*/
    //浏览器会默认请求图标 /favicon.ico,浏览器看心情发请求
    //当访问其他路径时 也要做对应的判断
}).listen(3000,function () {
    console.log('start 3000');//这里面都是服务端代码，都会打印在服务端的控制台上
});

