//默认执行一个“文件”时，就会套一层闭包函数，所有代码都是在这个函数中执行的，默认这个函数提供5个参数,这五个参数可以直接使用，在文件中可以直接使用的我们叫他全局对象 global上的属性 + 五个参数
//不用声明可以直接使用  exports, require, module, __filename, __dirname
//console.log(global);
//1.process 进程对象
//2.Buffer 缓冲区，表示内存中的数据（16进制）
//3.clearImmediate,setImmediate√
//4.clearInterval,setInterval √
//5.clearTimeout,setTimeout √
//6.console √
//1.顺序是不一定的
/*console.log('log');
console.error('error');
console.warn('warn');
console.info('info');*/

//2.setTimeout 异步
//1)这里this是setTimeout自己
 //这里的this被外层闭包，被改掉了
/*setTimeout(()=>{ //箭头函数没有this指向，从而解决了this问题
    console.log(this);
});*/
//2)传递参数可以通过第三个参数和第四个参数传递
/*setTimeout(function (food,fruit) {
    console.log(food,fruit);
},1000,'食物','水果');*/
// 改变this指向的方式
// 1.call apply
// 2.bind
// 3.var that=this;
// 4.arrow func
/* 高阶函数
let a = b => c => b + c;
console.log(a(1)(2));
*/

//4.setImmediate 不能传递时间
//等待同步代码执行后调用，没有写时间的setTimeout
/*setImmediate(function () {
    console.log('setImmediate');
});
setTimeout(function () {
    console.log('setTimeout');
});*/
//默认setTimeout有可能会比setImmediate先执行

//5.process 代码执行时会开一个进程，代码运行完后进程就结束了
/*
setInterval(function () {
    //打印当前进程id
    console.log(process.pid);
    //杀死进程
    //process.kill(13140);
    //process.exit(); //退出进程
},2000);*/
setImmediate(function () {
    console.log('setImmediate');
});
process.nextTick(function () { //是异步的
    console.log('nextTick');
});
// nextTick> setImmediate > setTimeout