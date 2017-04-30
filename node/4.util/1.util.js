var util = require('util');
//引用核心模块不需要安装 也不需要./ ../

//util最主要的功能继承,判断类型
//js中的继承 call,原型继承,new, extends
/*1.call
function Parent() {
    this.wife= 'xxx';
}
Parent.prototype.drink = function () {
    console.log('喝酒');
};
function Child() {
    Parent.call(this);//将parent函数中的this改变成child的实例
    //只继承私有属性
}
var child = new Child();
console.log(child);*/

//2.
/*function Parent() {
    this.wife= 'xxx';
}
Parent.prototype.drink = function () {
    console.log('喝酒');
};
function Child() {
}
Child.prototype = new Parent();//由于实例既有私有又有公有
var child = new Child();//儿子可以通过原型链找到 父亲公有和私有的方法*/

//3.继承公有属性
/*function Parent() {
    this.wife= 'xxx';
}
Parent.prototype.drink = function () {
    console.log('喝酒');
};
function Child() {
}
Child.prototype.__proto__ = Parent.prototype;
var child = new Child();
child.drink();*/
//通过原型链连接父亲的原型

//4.Object.create es5的继承 只继承公有属性
/*function Parent() {
    this.wife= 'xxx';
}
Parent.prototype.drink = function () {
    console.log('喝酒');
};
function Child() {
}
function create(proto) { //原理
    var Fn = function () {};//先构造一个空函数 函数没有公有 没有私有
    Fn.prototype = proto;//函数的公有属性 变成父亲的共有属性
    return new Fn; //new出来的实例 只有公有方法
}
Child.prototype = create(Parent.prototype);
var child = new Child();
child.drink();*/

//5. setProtoTypeOf es6继承
function Parent() {
    this.wife= 'xxx';
}
Parent.prototype.drink = function () {
    console.log('喝酒');
};
function Child() {}
util.inherits(Child,Parent); //node中的继承 (继承公有属性)
//Object.setPrototypeOf(Child.prototype,Parent.prototype);
//原理Child.prototype.__proto__ = Parent.prototype
var child = new Child();
child.drink();
