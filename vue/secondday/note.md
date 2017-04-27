## 在事件执行时判断keycode进行操作
- 方法中应该放的是纯逻辑内容，不包含判断

## 修饰符 修饰一些内容
@方法名.修饰符

## vue vue-resource(ajax)
- 安装vue和vue-resource
```
npm install vue vue-resource bootstrap --save
```


## 修饰符 
- .stop 阻止冒泡事件(停止向上传递)
- .capture 增加给父级的让事件从外到内执行，会在发生冒泡事件
- .self 由自己触发，不包括自己的子集
- .prevent 阻止默认行为
- .once 只绑定一次事件(在执行事件后移除事件)
- .code 根据键盘码触发事件 .enter .space .delete ....

## 绑定动态属性
- 动态属性用v-bind绑定 可以简写成:
- 在绑定动态属性中有两个特殊class ,style

### class
- 对象绑定
```
.a{background:"red"}
.b{color:"green"}
<div :class="{a:flag,b:flag1}"></div>
data:{flag:true,flag1:true}
```
- 数组绑定
```
.a{background:"red"}
.b{color:"green"}
<div :class="[c1,c2]"></div>
data:{c1:'a',c2:'b'}
```
### 样式绑定
```
<div :style="[s1,s2]"></div>
data:{s1:{background:'red'},s2:{color:'red'}}
```



## 生命周期
- 针对的是组件，根组件也是组件，仍然遵循这个流程