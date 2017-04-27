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
    },
    methods:{
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
    mounted(){ //页面加载完成后会调用此函数
        this.todos = JSON.parse(localStorage.getItem('todos'));
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
        total(){ //默认是get
            return this.todos.filter(function (item) {
                return !item.isChecked;//表示将当前项isChecked为true的都删除
            }).length;
        }
    }
});