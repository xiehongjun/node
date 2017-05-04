var ary = [
    {path:'/profile',meta:{}},
    {path:'/profile/about',meta:{}}
]
//如果数组里有一个needLogin为true 则返回true
var flag = ary.some((item)=>{
    return item.meta.needLogin
});
//some返回的是boolean true、false
//find返回的是item 找不到是 undefined
console.log(flag);