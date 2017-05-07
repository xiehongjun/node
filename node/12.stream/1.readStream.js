let fs = require('fs');
//fs.createReadStream 创建可读流
//特点
//1.highWaterMark 最高水位线，每次能读64k
//2.读取的文件必须存在
//3.默认读取到的内容是buffer
let rs = fs.createReadStream('./name.txt',{highWaterMark:1});
//rs表示可读流对象
//通过绑定事件可以触发数据的流动
//默认叫非流动模式-> 流动模式
let arr = [];
rs.on('data',function (chunk) {
    console.log(chunk);
    arr.push(chunk); //将buffer放入到数组中
    rs.pause(); //暂停data事件的触发，如果数据没有读完不会触发end事件
});//监听数据到来的事件，可读流继承了事件，后台会不停的emit('data',读到的数据)
setInterval(function () {
    rs.resume();//恢复触发data事件
},1000);
//默认监听了on data事件会疯狂的读取，直到全部读完为止
rs.on('end',function () { //监听数据读取完成，读取完成后会调用end事件
    console.log(Buffer.concat(arr).toString()); //拼接buffer数组
});
rs.on('error',function (err) {//错误事件处理
    console.log(err);
});
//可读流：on('data') on('end') on('error') resume pause
