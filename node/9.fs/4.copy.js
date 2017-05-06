let fs = require('fs');
/**
 * @param source 要拷贝的源文件
 * @param target 拷贝出的目标文件
 */
//同步
//先读取 在写入
function copySync(source,target) {
    //readFileSync + writeFileSync
    let result = fs.readFileSync(source); //如果读取的时候指定的是utf8那么都出来的是字符串 否则就是buffer
    fs.writeFileSync(target,result);
}
//异步
function copy(source,target,callback) {
    //readFile + writeFile
    fs.readFile(source,function (err,data) {
        if(err)console.log(err);
        fs.writeFile(target,data,callback);
    });
}
copy('./age.txt','1.txt',function () {
    console.log('ok了');
});
//只能拷贝较小的文件，大文件会用流来处理