//1. node不支持gbk,utf8一个汉字几个字节，三个字节
//一个字节有多少个位组成 8个二进制组成
//1b = 8bit  1024b = 1k
//二进制  16进制  10进制
//换算 当前位的值*进制^(当前位-1)
let sum = 0;
for(let i = 1;i<=8;i++){
    sum+=Math.pow(2,i-1);
}
console.log(sum); //每一个字节最大255，转换成16进制最大是多少
//255 转换成16进制是ff  15*16+15 =255
//100 转换成16进制是多少 64

//buffer 一旦声明不能改变大小，而且创建时要指定大小
//1)通过长度创建(字节数量创建)
var buffer = new Buffer(3);//是随机分配的，
console.log(buffer);
//2) 通过数组创建buffer(如果是负 会加256 如果超出范围对256取模)
var buffer = new Buffer([0x11,101,-1]);
console.log(buffer);
//3) 通过字符串创建
var buffer = new Buffer('珠峰');
console.log(buffer.length); //buffer是按照字节长度来计算的
console.log(buffer[5]);//如果你取buffer，会自动转化成10进制

//它拥有forEach slice
var a = [1,2];
var arr = [a,2,3]; //数组中存储的是地址
var newArr = arr.slice(0);//复制的也是地址
a[1] = 3;
console.log(newArr);

/*
//克隆新对象
var obj = {name:1,age:2};
//JSON.parse(JSON.stringify(obj));
var newObj = {};
Object.assign(newObj,obj); //将后面的内容，克隆 赋予给newObj
console.log(newObj);*/

//buffer每一项的字节也是一个内存地址
var buffer = new Buffer([1,2,3,4,5]);
var newBuffer = buffer.slice(0,1);
newBuffer[0] = 100;
console.log(buffer); //会改变源buffer 因为截取出来的字节就是原buffer的字节

//1.buffer.write
var buffer = new Buffer(12);
//string 写入的字符串, offset,偏移量
buffer.write('训',9);
buffer.write('珠峰培',0);
console.log(buffer.toString());

//2.buffer.copy
var buffer = new Buffer(12);
var buf1 = new Buffer('珠峰');
var buf2 = new Buffer('培训你好');
buf1.copy(buffer, 0); //包前不包后 slice(0,1)
buf2.copy(buffer, 6);
//targetBuffer 目标buffer, targetStart,目标的开始 sourceStart  源的开始, sourceEnd 源的结束
console.log(buffer.toString());

//3.concat拼接buffer
var buf1 = new Buffer('珠峰');
var buf2 = new Buffer('培训');
var buf3 = new Buffer('你好');
//Buffer.concat([buf1,buf2,buf3]); //拼接完成后会返回一个大buffer


//1.写长度过长，截取有效长度
//2.过短 多的就被截取掉
//3.不传递长度，默认全部拼接 myConcat
/*Buffer.myConcat = function (list,totalLength) {
    //1.判断是否传递长度
    //2.如果没传递，手动算出总长度，构,建一个大buffer
    //3.如果传递 直接构建大buffer
    //4.循环传递过来的list。将每一个buffer拷贝到大buffer上 buffer.copy()
    //5.返回buffer，如过给的length过长截取有效内容  buffer.slice()

};*/
Buffer.myConcat = function (list, totalLength) {
    if(typeof totalLength == 'undefined'){
        totalLength=0;
        //算出总长度
        list.forEach(item=>totalLength+=item.length);
    }
    let buffer = new Buffer(totalLength);
    let index = 0;
    list.forEach(item=>{
        item.copy(buffer,index); //累加偏移量进行拷贝
        index+=item.length;
    });
    return buffer.slice(0,index);
};
console.log(Buffer.myConcat([buf1,buf2,buf3]).toString());