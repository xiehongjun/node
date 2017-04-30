## node是异步操作，基于回调函数

## js中哪些是异步的
- 定时器
- 事件触发
- ajax
- 回调函数

## 阻塞非阻塞
针对的内核，厨师，如果厨师不释放掉服务员，主线程不可能异步

- 非阻塞是异步的前置条件

> 主线是单线程的，内核是多线程的

## 单线程&多线程
- 一个个发短信
- 群发短信多线程

> 进程包括线程，在node中一个进程只能包括一个线程，node可以开多个线程，开多个进程（子进程）

## 事件循环
- 事件驱动

## global全局对象，window是浏览器的全局对象


## 模块
### 安装模块 
- npm root -g 可以查看安装到哪里去了
- 全局安装 -g 在命令行下使用
- nrm 切换源的工具
默认下载从官方下载npm,想从国内下载
```
npm install -g nrm 
```
- 查看所有可用的源
```
nrm ls
```
- 添加源
```
nrm add zf http://172.18.0.188
nrm del 源的名字
```
- 使用源
```
nrm use zf
```
- 测试源的速度
```
nrm test
```
### 本地安装(如果切换到淘宝后，以后都是通过淘宝进行安装)
- 本地安装主要在项目中使用
- 如果没有初始化package.json可能会安装上一node_modules目录
```
npm init -y
npm install jquery --save 
npm uninstall jquery --save 卸载
```
#### 项目依赖
- 上线需要开发时也需要 mime
```
--save可以简写 -S
```
#### 开发依赖
- 上线不需要，开发时需要 webpack gulp
```
--save-dev 可以简写 -D
```
#### 安装依赖
- 当我们文件上传到github上，会node_module文件忽略掉，别人下载代码后需要执行npm install 将所有依赖进行安装
```
npm install
```

> 本地安装会默认安到node_modules中，package.json可以记住安装过的文件。

## 分类
- 文件模块
- 内置模块
- 第三方模块
