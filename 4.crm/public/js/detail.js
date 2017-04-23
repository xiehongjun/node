//获取当前页面的路径，看是否带有id参数
// ?id=1&a=1  {id:1}
//字符串原型上的方法，所有字符串都可以调用
String.prototype.parseQuery = function () {
    var query = {};
    this.replace(/([^?&=]+)=([^?&=]+)/g,function () {
        query[arguments[1]] = arguments[2];
    });
    return query; //返回查询串解析的对象
};
var query = window.location.search.parseQuery();
var oBtn = document.createElement('button');
var group = document.getElementById('group');
oBtn.style.cssText="font-size:20px;color:blue;width:60px;";
var id = query.id;
if(id){ //修改
    oBtn.innerHTML = '修改';
}else{ //增加
    oBtn.innerHTML = '增加';
}
group.appendChild(oBtn);
// 做增加和修改的逻辑
var username = document.getElementById('username');
var age = document.getElementById('age');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
oBtn.onclick = function () {
    if(id){ //修改

    }else{ //增加
        ajax({
           url:'/addInfo',
           dataType:'json',
           type:'post', //post是通过请求体发送数据
           data:JSON.stringify({
               name:username.value,
               age:age.value,
               phone:phone.value,
               address:address.value
           }),
           success:function (res) {  // {msg:'',code:'',data}
               if(res&&res.code == 0)
                    window.location.href = '/';
           }
        });
    }
};