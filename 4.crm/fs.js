//node给我提供了操作文件的方式，字符串； 读取的都是二进制数据
let fs = require('fs');
//同步方法 和异步方法 同时出现；
//1.如何读取文件 如果文件不存在 会报错
var result = fs.readFileSync('./index.html','utf8');
//如果想看到result必须 写一个utf8否则结果是二进制数据
//服务端自己读取上级文件是可以的
//console.log(result);
//2.如何写文件 文件不存在则创建文件,如果存在则清空，清空后在写入,写入的时候会默认将对象转换成字符串写入
fs.writeFileSync('./zfpx.json',JSON.stringify({name:1}));