var vm = new Vue({
    el:'#app',
    data:{
        todos:[
            {title:'今天学vue',isChecked:true},
            {title:'明天学angular',isChecked:false},
            {title:'明天学angular',isChecked:false},
            {title:'大后天学react',isChecked:true}
        ],
        editTodo:'',
        state:'',
        currentTodo:''//当前点的是谁
    },
    methods:{
        reset(){ //让当前点击的变成空
            this.currentTodo = '';
        },
        changeTitle(todo){
            this.currentTodo = todo;
        },
        addTodo(){
            this.todos.push({title:this.editTodo,isChecked:false});
            this.editTodo = ''; //添加后清空输入框
        },
        remove(todo){
            this.todos = this.todos.filter(function (item) {
               return todo != item;
           })
        }
    },
    //vue提供的生命周期的方法，钩子函数
    mounted(){ //页面加载完成后会调用此函数 ,如果本地没有数据默认是空数组
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    watch:{
        todos:{
            handler(){
                //将todos存到本地  设置key和value，value会被自动toString
                localStorage.setItem('todos',JSON.stringify(this.todos));
            },
            deep:true //深度监控，只要todos有变化 就会执行此监控
        }
        /*todos(){  //watch方法只能监控一级，默认不监控数组中某个对象的属性的变化
            console.log(100);
        }*/
    },
    computed:{
        cloneTodo(){
            if(this.state == 'complete'){ //全部 返回所有数据
                return this.todos;
            }
            if(this.state == 'finish'){  //完成 返回checked为true的数据
                return this.todos.filter(function (item) {
                    return item.isChecked;
                })
            }
            if(this.state == 'unfinish'){//未完成 返回checked为false的数据
                return this.todos.filter(function (item) {
                    return !item.isChecked;
                })
            }
        },
        total(){ //默认是get
            return this.todos.filter(function (item) {
                return !item.isChecked;//表示将当前项isChecked为true的都删除
            }).length;
        }
    }
});
//hash值 可以在当前页面上 保证不跳转页面，并且更新url
//获取hash值
var listener = function () {
    //当hash值变化时会执行此函数 将当前的hash值赋予给state
    vm.state = window.location.hash.slice(1) || 'complete';
};
listener();
window.addEventListener('hashchange',listener,false);
