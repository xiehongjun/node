//path是node中一个核心模块，处理路径的
//1. join 拼接 / resolve 解析 互相替代
let path = require('path');
//解析出绝对路径,可以传入多个参数会全部解析,支持../
console.log(path.resolve('./a','./b','../../c'));
//join 拼接
console.log(path.join(__dirname,'./a','./b','../../c'));
//path和resolve用哪个都可以