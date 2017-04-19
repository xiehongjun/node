/*let name = 'zfpx';
let age = 8;
//es6 模板字符串 不兼容5
let str = '<ul><li>${name}</li><li>${age}</li></ul>';
//贪婪的  ?!  ?:  *?

//  /([^=&]+)=([^=&]+)/
str = str.replace(/\$\{([^}]+)\}/g,function () {
    return eval(arguments[1]);
});
console.log(str);
// <ul><li>zfpx</li><li>age</li></ul>*/


//key和value 相同的情况下 可以省略一个
var a = 1;
var b = 2;
var obj = {c:a,b};
console.log(obj);


