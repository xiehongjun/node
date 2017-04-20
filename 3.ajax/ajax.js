//AJAX  ASYNC JAVASCRIPT AND XML
//1.创建xhr对象
//如果浏览器不支持XMLHttpRequest方法
~function () {
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
            } catch (e) {}
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
            //永远不会走缓存， hash值
            if(_defaultOptions.url.indexOf('?')>-1){
                _defaultOptions.url+='&ran='+Math.random();
            }else{
                _defaultOptions.url+='?ran='+Math.random();
            }
        }
        xhr.open(_defaultOptions.type,_defaultOptions.url,_defaultOptions.async);
        xhr.responseType = _defaultOptions.dataType; //设置服务端的返回数据的类型
        xhr.onreadystatechange = function () {
            // 服务端告诉200 DONE 表示完成 => 成功获取数据
            if(this.readyState==4&&/^2\d{2}$/.test(this.status)){
                // 默认我们会传递一个success函数，调用函数将最后的结果传递到success函数中
                if(typeof _defaultOptions.success == 'function')
                    //this.response就是服务端最后返回的结果,解决异步的问题，通过回调函数
                    _defaultOptions.success.call(this,this.response);//让success函数中的this变成xhr对象
            }
        };
        xhr.send(_defaultOptions.data);//请求体中数据要通过send发送
    }
    window.ajax = ajax;
}();

/*getXhr();7
getXhr(); *///当一个函数执行完后 下次 在重新执行会导致重新判断，解决方式：函数的覆盖
//每次调用ajax 都要重新创建一个xhr对象



// 传递数据有两种方式  url?a=xxx&b=xxx&c=xxx  请求体中{a:1,b:2}




/*
ajax({
    url:'', //请求的路径
    type:'get', //请求方法
    dataType:'text', //服务端返回数据的类型
    async:true,//同步还是异步
    data:JSON.stringify({name:1}), //请求体传递数据
    success:function (data) { //成功后执行的函数
        console.log(this)
    }
});*/

/*
//服务端返回html后，浏览器解析html发现有ajax请求，会在向服务端发送请求
//1.传递参数通过url传递 问号后面的 我们称他为“查询字符串”
//2.通过send中传递数据，也就是放在请求体中 一般发送“json字符串”
//如果是表单 1)通过submit提交数据 有两种方式get和post，get请求依旧默认拼接到url上，post请求放到请求体中
var xhr = new XMLHttpRequest();
xhr.open('GET','/user?id=1&b=2&c=3',true);//通过路径递参数
xhr.onreadystatechange = function () {
    //等待数据完成后并且 服务端返回200 即可拿到数据
    if(xhr.readyState == 4 && xhr.status == 200){
        xhr.response //默认类型都是字符串，即是服务端response.end中的结果，如果设置responseType="json" 那么强制需要服务端返回的是对象类型，ajax是异步操作,必须放在onreadystatechange中
    }
};
xhr.send();//请求体的数据在这里传递
*/
