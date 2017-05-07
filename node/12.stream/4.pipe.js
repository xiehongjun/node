//读取默认64k 写入16k
//每次读取4个 写1个
let fs = require('fs');
function pipe(source,target) {
    let rs = fs.createReadStream(source,{highWaterMark:4});
    let ws = fs.createWriteStream(target,{highWaterMark:1});
    //1.监听可读流的rs.on('data')事件，开始读取
    rs.on('data',function (data) {
        //2.调用ws.write()方法，将内容写入到文件中，返回flag判断是否可以继续写入
        let flag = ws.write(data) ;
        //3.返回false，暂停读取 rs.pause()
        if(!flag)rs.pause();
    });
    //4.当内容全部写入后 调用ws.on('drain')，在drain方法中调用rs.resume()
    ws.on('drain',function () {
        rs.resume();
    });
    //5.监听读完后的事件 rs.on('end') 关闭可写流 ws.end()
    rs.on('end',function () {
        ws.end();//强制将没写完的东西 全部写入
    })
}
pipe('./name.txt','./name1.txt');

