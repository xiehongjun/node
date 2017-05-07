let fs = require('fs');
let ws = fs.createWriteStream('./name1.txt',{highWaterMark:3}); //3b
//1024b = 1k  1个汉字3个字节
let index = 0;
function write() { //认为每次调用write都可以先写一次
    let f = true;
    while (index<10 &&f) {
        f = ws.write(index+++'');
    }
}
write();
ws.on('drain',function () { //抽干,当可写流内存全部写入后，会触发drain方法
    write();
    console.log('抽干');
});
//可写流 on("drain")
// write end