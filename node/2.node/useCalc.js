var obj = require('./calc'); //引用其他模块，require是同步代码，相当于同步的将文件读写过来
//默认拿到的不是exports对象，是module.exports对象
console.log(obj);
//文件模块 必须使用./ 或者../来引用
//如果有js后缀可以省略 node会自动添加.js .json .node进行查找

/*
(function () {
    var this = module.exports;
    module.exports适合导出对象类型
    exports适合单个导出
    module.exports = exports = {}
    return module.exports;//最后我们require的结果就是module.exports
})*/
