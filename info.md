general通用头
Request URL:http://127.0.0.1:8080/  请求的路径
Request Method:GET 浏览器发送的请求都是get
Status Code:200 OK  状态码200 表示ok 浏览器规定的
200 表示成功的返回了内容
301 永久重定向
302 临时重定向
304 走缓存
客户端错误
400 参数不正确
403 没权限访问
404 找不到文件
服务端错误
500 内部错误
503 没有做负载均衡
Remote Address:127.0.0.1:8080


三次握手 在以前每一次请求都会造成三次握手
Response Headers
Connection:keep-alive 链接：保持链接
Date:Tue, 18 Apr 2017 08:35:56 GMT 服务端响应浏览器的一个时间
Transfer-Encoding:chunked 传输的方式 分段传输

Request Headers
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8   接收的类型
Accept-Encoding:gzip, deflate, sdch, br
Accept-Language:zh-CN,zh;q=0.8  接收的语言
Cache-Control:max-age=0  缓存
Connection:keep-alive
DNT:1
Host:127.0.0.1:8080
Upgrade-Insecure-Requests:1
User-Agent:Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36  浏览器内核信息
//浏览器内核 webkit Gecko Trident

请求由三部分组成 请求行 请求首 请求体
服务器端 响应内容给浏览器 响应行 响应首  响应体