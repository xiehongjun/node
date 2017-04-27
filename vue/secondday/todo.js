var vm = new Vue({
    el:'#app',
    data:{
        todos:[
            {title:'今天学vue',isChecked:true},
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
    }
});