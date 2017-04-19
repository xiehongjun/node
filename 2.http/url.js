let url = require('url');
let str = 'https://username:password@www.baidu.com:80/s?wd=asd&rsv_spt=1&rsv_iqid=0xcc0171ac0006c373&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=4&rsv_sug1=3&rsv_sug7=101&rsv_sug2=0&inputT=336&rsv_sug4=507#app';
let obj = url.parse(str,true);
//true表示将query转换成对象，解析后的结果 query pathname
/*var query = obj.query;
var pathname = obj.pathname;*/
let {query,pathname} = obj;
console.log(query,pathname);


/*let str1 = 'a=1&b=2'; //{a:1,b:2}
let reg = /([^&=]+)=([^&=]+)/g;
//exec 只能加g只能捕获一次
let obj = {};
str1.replace(reg,function () {
    obj[arguments[1]] = arguments[2]
});
console.log(obj);*/

