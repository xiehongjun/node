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
    ajax({
        url:'/getInfo?id='+id,
        dataType:'json',
        success:function (res) { // {code:0,msg:0,data:{}}
            if(res&&res.code == 0){
                var u = res.data;
                username.value = u.name;
                age.value = u.age;
                phone.value = u.phone;
                address.value = u.address;
            }else{ //传递的id根本存在，没法修改
                window.location.href = '/';
            }
        }
    }); //如果是修改默认请求当前用户信息
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
        //要将id传入过去，传入最新的数据
        //修改 =  查询+增加
        ajax({
            type:'put', //put修改
            dataType:'json',
            url:'/updateInfo?id='+id,
            data:JSON.stringify({ //要修改成什么样子
                id:id, //传给后台 后台不需要再增加id了
                name:username.value,
                age:age.value,
                phone:phone.value,
                address:address.value
            }),
            success:function (res) {
                if(res&& res.code==0){
                    window.location.href = '/';
                }
            }
        });
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
               if(res&&res.code == 0){}
                    //window.location.href = '/';
           }
        });
    }
};