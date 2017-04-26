//1.框架 都不要兼容性 ie9+
//2.数组：push pop shift unshift splice slice concat indexof sort reverse forEach map join
var arr = [{name:1},{name:2},{name:3},{name:2}];
var obj = {};
// 1).find方法是es6中的方法(不兼容)       查询
//1.在数组中查找，如果返回true表示找到了，找到后会将当前item返回，如果没找到则返回undefined
//2.查找到后停止循环
var obj = arr.find(function (item) {
    // if(item.name == 2) return true
    return item.name == 6;
});
console.log(obj);
// 2).map 映射 将一个数组 变成另一个模样   修改
//1.返回值是新数组，不会改变原数组，会将返回的值替换掉当前项
/*var arr = [{name:1},{name:2},{name:3},{name:2}];
var temp = {age:2};
var newArr = arr.map(function (item) {
    if(item.name == 2) return temp;
    return item;
});*/
var fruits = ['苹果','香蕉','橘子'];  // ['<li>苹果</li>','<li>香蕉</li>','<li>橘子</li>']
var newArr = fruits.map(function (item) {
    return `<li>${item}</li>`;//用返回的值替换掉原项
});
console.log(newArr.join(''));
/*for(var i = 0;i <arr.length;i++){
 var cur = arr[i];
 if(cur.name == 2){
 arr[i] = temp;
 }
 }*/
// 3).filter过滤 返回一个新数组
//在函数中返回true表示这一项留下,返回false表示这一项删除掉
var arr = [{name:1},{name:2},{name:3},{name:2}];
//声明式（不关心怎么实现，按照方法来用就可以）
var newArr = arr.filter(function (item) {
    return item.name != 2;  //如果想删除某一项 都用!=
});
console.log(newArr);
//命令式
/*for(var i =0;i<arr.length;i++){
    var cur = arr[i];
    if(cur.name == 2){arr.splice(i,1); i--}
}
console.log(arr);*/

//find filter map

// 4).for in/forEach/for of的区别
//for in 1.key是字符串类型的  2.for in会遍历私有和公有属性(不想遍历的私有属性也会被遍历出来)
//for of 1.可以跳出循环 2. 只会遍历数组中的内容 3.缺点 不能遍历对象
var arr = [1,2,3,4];
arr.name = 'jw';
for(var value of arr){ // value代表数组的每一项
   if(value == 3) break; //可以跳出循环
   console.log(100);
}

//5).reduce 收敛
// 返回的结果是 多次叠加后的操作，你可以自己制定首次默认的第一项是多少
var arr = [1,2,3,4,5,6];
var n = 0;
var result = arr.reduce(function (prev,next) {
    //上一个默认是数组的第一项，下一个默认是数组的第二项
    //上一个变成第一次返回的结果，下一个就是第三项
    console.log(prev,next);
    return prev+next;
},50);
console.log(result);
//二维数组  二维数组扁平化
var arr = [['北京'],['上海'],['广州']];//=> ['北京'，'上海','广州']
var result = arr.reduce(function (prev,next) {
    // prev ['北京'] next['上海']
    // prev['北京','上海'] next['广州']
    return prev.concat(next);
});
console.log(result);
// filter forof reduce map find