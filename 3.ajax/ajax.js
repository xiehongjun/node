//AJAX  ASYNC JAVASCRIPT AND XML
//1.创建xhr对象
//如果浏览器不支持XMLHttpRequest方法
function getXhr() {
    var xhr = '';
    var ary = [function () {
        return new XMLHttpRequest;
    }, function () {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }, function () {
        return new ActiveXObject("Msxml2.XMLHTTP");
    }, function () {
        return new ActiveXObject("Msxml3.XMLHTTP");
    }]; //循环数组中的每个函数
    for (var i = 0; i < ary.length; i++) {
        var curFn = ary[i]; //代表的是数组中的每一个函数
        try {
            xhr = curFn(); //找到后赋给xhr变量
            getXhr = curFn; //第一次确定下来 第4个靠谱，那就用第四个函数 将整个函数覆盖掉，以后再也不会重置执行判断逻辑 （惰性载入函数）
            break; //找到了 就不继续执行
        } catch (e) {
        }
    }
    if (xhr == '') {
        throw Error('你的浏览器 版本太低 更新一下');
    }
    return xhr;// 返回的就是xhr对象
}
function ajax(options) {
    //如果options不传递 应该有默认值
    var _defaultOptions = {
        url:'',
        async:true,
        dataType:'text',
        type:'get',
        data:null,
        success:null
    };
    //相对于 将options中的属性拿来 拷贝到_defaultOptions
    for(var attr in options){
        if(options.hasOwnProperty(attr)){
            _defaultOptions[attr] = options[attr];//覆盖 $.extend
        }
    }
    var xhr = getXhr();
    //GET 请求 有缓存，在url后面加一个随机数 /a?ran=123
    if(_defaultOptions.type.toUpperCase() == 'GET'){
        //如果有问号 拼接&符号 ，没有的话拼？
        if(_defaultOptions.url.indexOf('?')>-1){
            _defaultOptions.url+='&ran='+Math.random();
        }else{
            _defaultOptions.url+='?ran='+Math.random();
        }
    }
    xhr.open(_defaultOptions.type,_defaultOptions.url,_defaultOptions.async);
    xhr.onreadstatechange = function () {
        
    }
}
/*getXhr();
getXhr(); *///当一个函数执行完后 下次 在重新执行会导致重新判断，解决方式：函数的覆盖
//每次调用ajax 都要重新创建一个xhr对象







/*
ajax({
    url:'', //请求的路径
    type:'get', //请求方法
    dataType:'text', //服务端返回数据的类型
    async:true,//同步还是异步
    data:JSON.stringify({name:1}), //请求体传递数据
    success:function (data) { //成功后执行的函数
        
    }
});*/
