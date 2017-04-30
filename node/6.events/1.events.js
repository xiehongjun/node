function Girl() {
    this._events = {};//私有属性用来存放这种一对多的关系
}
//on的作用维护一个一对多的关系 {"变漂亮",[eat,shopping,cry]}
/**
 * 将事件名和回调函数组成一个对象 并且是一对多的关系
 * @param eventName 事件名
 * @param callback  回调函数
 */
Girl.prototype.on = function (eventName,callback) {
    if(this._events[eventName]){ //第二次{'变漂亮':[eat,shopping]}
        this._events[eventName].push(callback);
    }else{ //第一次 {'变漂亮':[eat]}
        this._events[eventName] = [callback];
    }
};
//通过发射的事件名 将数组里的每一项执行 {"变漂亮",[eat,shopping,cry]}
Girl.prototype.emit = function (eventName) {
    if(this._events[eventName]){
        //拿到存放的数组，循环数组中的每一个callback让其执行
        this._events[eventName].forEach(function (callback) {
            callback();
        });
    }
};

var girl = new Girl();
var eat = function () { console.log('吃')};
var shopping = function () {console.log('购物')};
var cry = function () {console.log('哭')};
girl.on('变漂亮',eat);
girl.on('变漂亮',shopping);
girl.on('变漂亮',cry);

//当触发事件后会将绑定的事件依次触发

girl.emit('变漂亮');

