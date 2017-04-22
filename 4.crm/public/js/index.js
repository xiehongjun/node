//获取所有数据，得到数据后插入到表格中
var module = (function () {//私有化
    var tBody = document.getElementById('tBody'); //表体
    function bindHtml(datas) {
        var str = '';
        for(var i = 0; i<datas.length;i++){
            var current = datas[i];//每一个用户
            str+='<tr>';
            str+='<td>'+(i+1)+'</td>';
            str+='<td>'+current.name+'</td>';
            str+='<td>'+current.age+'</td>';
            str+='<td>'+current.phone+'</td>';
            str+='<td>'+current.address+'</td>';
            str+='<td><a>删除</a></td>';
            str+='<td><a href="/detail.html">修改</a></td>';
            str+='</tr>';
        }
        tBody.innerHTML = str;
    }
    function init() {
        //获取所有数据
        ajax({
            url:'/getList',
            dataType:'json',
            success:function (res) { //res代表最终的响应结果
                // {code:0,data:[],msg:'成功'}
                if(res&&res.code == 0){
                    var datas = res.data;
                    bindHtml(datas); //将获取得数据展示到表体中
                }
            }
        });
    }
    return {
        init:init
    }
})();
module.init();