/*1.
var result = require('./calc');
//require后的结果就是module.exports
console.log(result["+"](1,2));*/

//2.
var result = require('./calc');
//{calc:calc}
console.log(result.calc["+"](1,2));


//文件模块