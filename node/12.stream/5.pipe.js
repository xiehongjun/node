//读取默认64k 写入16k
//每次读取4个 写1个
let fs = require('fs');
function copy(source,target) {
    let rs = fs.createReadStream(source);
    let ws = fs.createWriteStream(target);
    rs.pipe(ws);//将可读流的内容，导入到可写流中
}
copy('./name.txt','./name1.txt');
//pipe异步，读一点写一点 防止淹没可用内存
//无法看到读到的内容
