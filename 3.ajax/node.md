## ajax
```
var xhr = new XMLHttpRequest(); //UNSENT 0
xhr.open('method','url?a=1&b=2',true);//true代表的是异步
xhr.responseType = 'json';//设置服务端响应回来的类型
xhr.onreadystatechange = function(){
    if(xhr.status == 200 && xhr.readyState==4){
        xhr.response;//自动就是对象，后台返回的结果（数据）
    }
}
xhr.send(JSON.stringify({name:1}))
```
## ajax传递数据
- 解析路径
```
'url?a=1&b=2'
let {a,b} = url.parse(req.url,true)
```
- 解析请求体
```
xhr.send(JSON.stringify({name:1}))
var str = '';
req.on('data',function(data){
    str+=data;
});
req.on('end',function(){
    JSON.parse(str);
    res.end(JSON.stringify([]))
})
```

## 本地搭建静态服务
- 启动本地的html
```
npm install http-server -g
```