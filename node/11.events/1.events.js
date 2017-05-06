//发布订阅 绑定事件 触发事件
function EventEmitter() {
    //构造函数中的this都是实例，可以通过实例调用这个对象，维护关系
    this._events = {}
}
//{eventName:[callback]}
EventEmitter.prototype.on = function (eventName,callback) {
    //this 实例
    if(this._events[eventName]){ //不是第一次
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback]; //{事件名:[callback]}
    }
};
EventEmitter.prototype.emit = function (eventName,...data) { //...data将剩余的参数转换成数组
     this._events[eventName].forEach(item=>item.apply(this,data)); //apply可以将数组每一个拆出来依次传递给函数
    //{"有钱了":[learnBad]}  data=['男人','女人']
    //this._events[eventName].forEach(item=>item(...data));
};
EventEmitter.prototype.removeListener = function (eventName,callback) {
    //返回false则删除那一项
    this._events[eventName] = this._events[eventName].filter(item=>item!=callback);
};
EventEmitter.prototype.once = function (eventName,callback) {
    //执行一次后，在数组中删除掉此函数，下次执行不会再触发
    function one() {//当emit是触发的one函数 参数传递给了one arguments:['男人','女人']
        callback.apply(this,arguments); //emit时会触发one 函数，one会触发callback
        this.removeListener(eventName,one); //删除绑定的函数
    }
    this.on(eventName,one); //触发后删除callback
};
let e = new EventEmitter();
function learnBad(data,data1) {
    console.log(data+','+data1+'学坏');
}
e.once('有钱了',learnBad);
//e.removeListener('有钱了',learnBad);
e.emit('有钱了','男人','女人');
e.emit('有钱了','男人','女人');
e.emit('有钱了','男人','女人');

/*
let EventEmitter = require('events');
var e = new EventEmitter;
//e.on('事件名',function(){}) {"事件名":[func]}
//e.on('事件名',function(){}) {"事件名":[func,func]}
e.on('事件名',function(){
    console.log(1);
});
e.on('事件名',function(){
    console.log(1);
});
e.emit('事件名'); // {"事件名":[func,func]}.事件名.forEach item()*/
