//判断 当前url路径是否有id参数，如果有id表示修改，没有id则是增加
//封装一个获取查询对象的方法
String.prototype.parseQuery = function () {
    var query = {};
    this.replace(/([^?=&]+)=([^?=&]+)/,function () {
        query[arguments[1]] = arguments[2];
    });
    return query;
};
// ?id=1 获取对象
var oBox = document.getElementById('form');
var query = window.location.search.parseQuery();
var oBtn = document.createElement('button');
oBtn.className = 'btn';
if(query.id){ //这里就是修改
    oBtn.innerHTML = '修改';
}else{ //增加
    oBtn.innerHTML = '增加';
}
oBox.appendChild(oBtn);