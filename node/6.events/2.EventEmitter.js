//核心模块 内置模块 events 事件模块

var EventEmitter = require('events');
//要让Girl拥有所有的EventEmitter的公有方法
var util = require('util');
util.inherits(Girl,EventEmitter);
function Girl() {}
var g = new Girl;
function eat() {console.log('吃');}
function cry() {console.log('cry');}
//once 绑定一次，执行后在执行不会被调用了
g.once('变漂亮',eat);
g.on('变漂亮',cry);
g.removeAllListeners(); //移除全部
g.removeListener('变漂亮',cry);
g.emit('变漂亮');
g.emit('变漂亮');
g.emit('变漂亮');
//on removeListener emit once removeAllListeners


