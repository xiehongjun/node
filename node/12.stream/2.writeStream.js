let fs = require('fs');
//创建可写流
//1.没有则创建，内容全部清空，写入新内容
//2.写入时编码格式是utf8
//3.默认写入highWaterMark 16k
let ws =  fs.createWriteStream('./name1.txt',{highWaterMark:1});
//可写流有两个写数据的方法 write end
//只接受 buffer或者 字符串
let flag = ws.write(1+'');//false
console.log(flag);
//console.log(flag);//我还能继续写,无论是true还是false都可以最终写入(淹没可用内存)；
//我们可以控制写入，例如如果返回了false 不让它继续写了
//ws.end('遗言'); 只要调用end后会将write中的内容强制写到文件中
//write after end 不能再结束后再次调用write方法

//模拟写10个数