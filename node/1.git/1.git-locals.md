## pwd
print working directory 打印当前工作目录

## 告诉git当前我是谁
- 用git第一次需要配置 以后都不需要,如果不配置则不能提交代码
```
git config --global user.name <github名字>
git config --global user.email <github邮箱>
git config --list 查看配置列表
```

## 初始化文件夹（告诉git哪个文件夹归git所管理）
```
git init
```
## cd 
- change directory

## mkdir 
- make directory

## 不能仓库套仓库
不能再初始化后的仓库下，在新建文件夹初始化仓库

## 查看文件中的内容
```
ls -a
```
## 删除文件夹
```
rm -rf .git
```
## 删除文件
```
rm index.txt
```
## 创建文件
```
touch index.txt
```

## 查看文件内容
```
cat index.txt
```

## vi编辑
- 不能编辑文件夹
```
vi index.txt
i 插入模式
ESC :wq保存并退出
q! 强制退出
```


## 添加暂存区
```
git add .
git add -A
git add 文件名
```

## 添加历史区
```
git commit -m '消息'
```

## 查看版本 
```
git log
```

## 代码对比
- 工作区和暂存区
```
git diff
```
- 工作区和历史区
```
git diff 分支名
```
- 暂存区和历史区
```
git diff --cached
```

> 如果执行过一次增加到版本库 git commit -a -m"write hello"

## 回滚某个版本
```
git reset --hard 版本号
```

## 查看所有历史
```
git reflog
```

## 搜索
```
git log --grep=hello
git log --author=wake
```

## 删除本次的add
```
git reset HEAD 文件名
```

## 查看当前项目下的分支
```
git branch
```

## 创建分支
```
git branch dev
```
## 切换分支
```
git checkout dev
```
## 删除分支
```
git branch -D dev
```
## 创建并切换分支
```
git checkout -b dev
```

## 合并分支
- 默认master是主干，用主干和并分支
```
git merge 分支名
```

> 合并分支后 被合并的分支删除即可

## 处理冲突
由于两个分支改变了相同的文件，但是内容不同这时候要手动处理，再次提交，就可以完成合并（模块化开发可以降低冲突）