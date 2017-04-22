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
            //自定义属性，给每个删除按钮添加一个id 。用于点击时,能获取对应数据的id
            str+='<td><a data-id="'+current.id+'">删除</a></td>';
            str+='<td><a href="/detail.html">修改</a></td>';
            str+='</tr>';
        }
        tBody.innerHTML = str;
    }
    function bindEvent() {
        tBody.onclick = function (e) {
            e = e || window.event;
            var ele = e.target || e.srcElement;
            if(ele.tagName == 'A' && ele.innerHTML == '删除'){
                //把当前点击的id 传递给后台;
                var id = ele.getAttribute('data-id');
                var flag = confirm('你确定丢掉id为'+id+'用户吗');
                if(flag){ //确认删除
                    ajax({
                        url:'/removeInfo?id='+id,
                        dataType:'json',
                        success:function (res) {
                            //在这里移除dom元素
                            // a td tr tbody 删除 tr
                            if(res&&res.code==0){
                                ele.parentNode.parentNode.parentNode.removeChild(ele.parentNode.parentNode);
                            }else{
                                alert(res.msg);
                            }
                        }
                    });
                }
            }
        }
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
                    // 事件委托方式 添加时间
                    bindEvent();
                }
            }
        });
    }
    return {
        init:init
    }
})();
module.init();