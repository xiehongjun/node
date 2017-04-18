姜文   qq:1035465284   iphone:18310349227
## 文件名不要使用中文，大写，特殊符
## ajax+node
安装git选择第三项，为了可以在dos命令下 使用git命令和linux命令
## 清屏clear
## 查看所有文件ls -al
## 改变目录change directory cd
## 切换盘符 D:
## 切换目录 cd 拖入文件
## 在webStorm，点击view tool-window terminal
## 创建目录 mkdir -p a/b
## 创建文件 touch 文件名
## 查看ip地址 ipconfig / ifconfig
## webstrom注册码
http://idea.lanyus.com/
## 全日制angular+react
## 周末纯node

## 工作流程
- 制定需求 pm 产品经理
- ARP高保真原型图 （线框图）
- 设计，标尺寸 1366 960  640 750 414*3
- 切图，转换成html
- 写js 静态
- 和后台确定接口（联调） ajax
- 提测

## 后台php,java大数据,.net
## node（全栈工程师）
- node只是一个运行环境，让js可以运行在服务器端，浏览器端js的缺点，不能操作系统级的api，而且没有模块化，var obj = {} (function())(),node可以操作系统，自带模块化
    - node增加了很多方法，http fs
    - commonjs规范   (requirejs amd规范 依赖前置,seajs cmd规范 就近依赖)
- node是基于v8引擎，速度快
    - 可以支持es6,后台不需要考虑兼容性
- js单线程，异步I/O
    - 对文件操作时 同步和“异步”同时存在，能用异步绝不用同步
- node全局对象不再是window了，是global,直接在文件中打印this是{},并不是global
- node是一个基于事件驱动 （发布订阅模式）
    - on removeListener emit


## commonjs 
- 对模块化的规范，自带模块化
- 如何声明一个模块(任何一个js文件都是一个模块)
- 导出一个模块 module.exports  exports
- 使用一个模块 require


