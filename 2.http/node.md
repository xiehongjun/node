## url模块
是node中自带的一个模块，解析路径的
```
let url = require('url');
将路径拆分成一个对象，true的参数会将查询字符串转换成一个对象
let urlObj = url.parse(req.url,true);
let pathname = urlObj.pathname 端口号到问好之间的内容 http://www.baidu.com"/s"?a=1
let query = urlObj.query  查询字符串 a=1 =>{a:1}

let {pathname,query} =  url.parse(req.url,true);
```
//es5,es6,typescript