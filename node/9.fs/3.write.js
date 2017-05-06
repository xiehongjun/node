let fs = require('fs');
//1.默认写入编码格式是utf8
//2.写入的内容会被toString
//3.默认是清空 创建 仅写 w
//fs.writeFileSync('./name.txt',1);
//fs.appendFileSync();可以追加数据
fs.writeFile('./name.txt',1,function (err) {
    //err表示错误对象
    console.log(arguments);
});

