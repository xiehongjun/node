var _defaultOptions = {
    url:'',
    async:true,
    dataType:'text',
    type:'get',
    data:null,
    success:null
};
var options = {
    url:'/aa',
    async:false
};
var a = {
    a:1
};
//实现对象的拷贝
console.log(Object.assign(_defaultOptions,options,a));