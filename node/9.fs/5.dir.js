//操作目录
let fs = require('fs');
//创建目录
let urlPath = 'a/b/c/d';
//同步
function makepSync(p) {
    // a  a/b a/b/c a/b/c/d
    let urlArr = p.split('/'); //[a,b,c,d]
    for(let i = 0; i<urlArr.length;i++){
        let tempPath = urlArr.slice(0,i+1).join('/'); //a   a/b
        //判断文件是否存在，不存在创建
        let flag = fs.existsSync(tempPath);
        if(!flag){
            fs.mkdirSync(tempPath);
        }
    }
}
makepSync(urlPath);
/*fs.exists('path',function (flag) {
    if(flag){
        fs.mkdir('path',function () {

        })
    }
})*/
//异步 fs.exists fs.mkdir 递归 a a/b a/b/c
//1.先创建一级 创建成功后调用自己 实现递归创建