// 操作文件 fs模块 file system 是一个内置模块
// 方法是同步和异步同时出现，能用异步不会用同步
let fs = require('fs');
//readFile异步  readFileSync
//可以读取任意目录下的文件
//1.读取的文件必须存在
//2.默认读出的内容全部是buffer类型
//3.会将全部内容读取到内存中，不能读取比内存大的文件
//4.可以指定编码格式为utf8格式
/* 处理异常可以是用try catch
 let name = fs.readFileSync('./name.txt','utf8');
 let age = fs.readFileSync('./age.txt','utf8');
 let obj = {name,age};
 console.log(obj);*/
let obj = {};
let EventEmitter = require('events');
let e = new EventEmitter;
//err错误对象，node为了处理异步的错误通常回调函数的一次个参数都是错误对象 error-first
fs.readFile('./name.txt','utf8',function (err,data) {
    obj.name = data;
    e.emit('result');
});
fs.readFile('./age.txt','utf8',function (err,data) {
    obj.age = data;
    e.emit('result');
});
e.on('result',function () {
    //可以将对象转换成数组 {name:'zfpx',age:8} =>[name,age]
    if(Object.keys(obj).length == 2){
        console.log(obj); //{name:'zfpx',age:8}
    }
});
