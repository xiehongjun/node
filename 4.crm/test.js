let fs = require('fs');
let result = fs.readFileSync('./data.json','utf8');//最后我们要操作读出来的数据，所以必须要让读出的内容转换成字符串类型
//如果没有用户读取到的是空字符串。如果没有 返回空数组;
 result = result.length == 0?[]:JSON.parse(result);
console.log(result);

listener();
function listener() {
  if(false){
   console.log(100);
   return;
  }
 if(true){
  console.log(200);
  return;
 }
}