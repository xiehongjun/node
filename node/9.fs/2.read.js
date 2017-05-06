let fs = require('fs');
let obj  = {};
function readName() {
    return new Promise(function (resolve,reject) {
        fs.readFile('./name.txt','utf8',function (err,data) {
            if(err) reject(err); //失败
            resolve(data); //成功
        });
    });
}
function readAge() {
    return new Promise(function (resolve,reject) {
        fs.readFile('./age.txt','utf8',function (err,data) {
            if(err) reject(err); //失败
            resolve(data); //成功
        });
    });
}
//并行读取  如果其中的一个promise失败 就会失败
Promise.all([readName(),readAge()]).then(([name,age])=>{
    //回调函数的参数和promise的数组结果是一一对应的
    let obj = {name,age};
    console.log(obj);
},(err)=>console.log(err));

//链式读取
/*readName().then(function (data) {
    obj.name = data;
    //在第一个then中再次返回promise 可以继续then下去
    return readAge();
}).then(function (data) {
    obj.age = data;
    console.log(obj);
}).catch(function (err) { //捕获错误 promise报错后 就会走catch方法。
    console.log(err);
});*/
