//require可以引用一个文件，让其在这个文件下执行
var obj = require('./sum.js');
//require是一个同步方法,将文件读写过来执行
console.log(299);
//{add:function(){},minus:function}
// console.log(obj.minus(1,3));
//console.log(global.a);