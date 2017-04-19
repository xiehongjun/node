var path = '/index.html?a=1&b=2';
var url = require('url');
/*let pathname = url.parse(path,true).pathname
let query = url.parse(path,true).query*/
let {pathname,query} = url.parse(path,true);

// template String
let name = '帅哥';
let age = 18;
// let str = '\'\'你好我是'+name+'今天才'+age;
let str = `你好我是${name}今天才${age}`;
console.log(str);



/*
let school = {
    name: '珠峰培训',
    age: 8,
    address: '回龙观'
};
let {name,address,age:age1} = school;
/!*let name = school.name;
let age = school.age;
let address = school.address;*!/
console.log(name,address,age1);*/
