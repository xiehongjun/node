## 下载hexo工具
```
npm install hexo-cli -g
```

> 下载后可以在命令行下生成一个全局命令叫hexo
## 创建一个博客文件夹
```
hexo init 文件夹的名字
```
## 进入这个文件夹
```
cd 文件夹的名字
```
## 启动博客
```
hexo server -p 端口号
```

## 发布到github上 一个账号只能发布一次
```
名字叫  zuyuan.github.io
```

## 在conf.yml下进行配置
```
deploy:
  type: git
  repo: https://username:password@github.com/zuyuan/zuyuan.github.io.git
  brach: master
```
## 下载发布插件
```
npm install hexo-deployer-git --save
```
## 发布
```
hexo g 生成静态页
hexo d 发布
```
## 查看博客
```
zuyuan.github.io
```

## 找到theme
找到github地址,拉取到本地，更改_confg.yml 指定新的主题名字
```
hexo g 
hexo d
```