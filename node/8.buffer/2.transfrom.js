//任意进制转10进制 parseInt
//任意进制转任意进制 toString()
//1.要转换的内容，当前是什么进制
console.log(parseInt("113",8));
console.log((0xff).toString(2));
//base64 不是加密算法（可逆） 加密md5 sha1 sha256
//md5特点
// 1.加密任何东西出来的结果长度都一样
// 2.不同内容加密出的结果不一样
// 3.加密后不可逆
//base64 1个汉字 24个位 将24个位拆成4段
var str = '珠';
var buffer = new Buffer(str);
console.log(buffer); //e7 8f a0
console.log((0xe7).toString(2));
console.log((0x8f).toString(2));
console.log((0xa0).toString(2));
//base64中每个字节转换成10进制都不会大于64
// 11111111 =255
// 00111111 <64  = 2^6-1
// 11100111 10001111 10100000 将汉字转换成2进制
// 00111001 00111000 00111110 00100000 //装换成10进制去可见编码中取值即可
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));
//57 56 62 32
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
str+='0123456789';
str+='+/';
console.log(str[57]+str[56]+str[62]+str[32]); //取值后就是base64编码