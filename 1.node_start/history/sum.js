//arguments是类数组。不是数组
//1.将类数组。转换成数组 [].slice.call(arguments);//借用数组的方法
//2.arguments.__proto__ = Array.prototype; 让arguments执行数组的原型
//3.Array.from(arguments); es6 将类数组转换成数组
//4.[...arguments] 拓展运算符 es6
function sum() {
    var total = 0;
    var arr = [].slice.call(arguments);
    arr.forEach(function (item,index) {
        total+=item;
    });//第二个参数是this指向
    return total;
}
module.exports = sum; //导出
