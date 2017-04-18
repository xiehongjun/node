/*for(var i = 0; i<3;i++){
    setTimeout(function () {
       console.log(i);
    })
}*/
//先执行同步代码 在执行异步代码，setTimeout就是异步代码
//1.回调函数：现在不调 回头再调
//模拟拷贝功能，先读取 ,在写入
function read(callback) { //这就是回调函数
    console.log('开始读取');
    setTimeout(function () {
        var result = '这是内容';
        if(typeof callback== 'function'){
            callback(result);
        }
    },1000);
}
//在这里打印出result
read(function (data) {
    console.log(data);
});
//看代码是同步还是异步， 看是否有回调函数
