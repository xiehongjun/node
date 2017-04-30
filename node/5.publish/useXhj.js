//第三方模块 下载后require('名字');
var result = require('xhj-my-pack');
//会自动找到index.js,通过package.json中的main属性来查找的
console.log(result);
//查找过程，现在自己目录下查找，如果自己找不到向上找，找到当前根目录位置，找不到报错，找到同名的文件后，会找package.json 找到main对应的文件将其引入
console.log(module.paths); //查找路径

