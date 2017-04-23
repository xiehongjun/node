let fs = require('fs');
let result = fs.readFileSync('./data.json','utf8');//最后我们要操作读出来的数据，所以必须要让读出的内容转换成字符串类型
//如果没有用户读取到的是空字符串。如果没有 返回空数组;
 result = result.length == 0?[]:JSON.parse(result);
console.log(result);

/*
var ary = [{name:1},{name:2}];
var obj = ary[0];
obj = {name:3};
console.log(ary);*/

/*
var ary = [{name:1},{name:2}];
ary[0] = {name:3}
console.log(ary);*/
