//1. node不支持gbk,utf8一个汉字几个字节，三个字节
//一个字节有多少个位组成 8个二进制组成
//1b = 8bit  1024 = 1k
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
//string 写入的字符串, offset,偏移量 length,写入的长度 encoding utf8
buffer.write('训',3);
buffer.write('珠峰培',0);
console.log(buffer.toString());