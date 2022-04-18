<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 将addtodo方法传递 -->
                <MyHeader :addTodo="addTodo"/>
                <!-- 将todoList传递给mylist组件
                这里的todoList要和下面return中的todoList写的要一样 -->
                <MyList :todoList='todoList' :checkTodo='checkTodo' :deleteTodo='deleteTodo'/>
                <MyFooter :todoList='todoList' :selectAllTodo='selectAllTodo' :clearAllTodo='clearAllTodo'/>
             </div>
        </div>
    </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'

export default {
    name:'App',
        data() {
            return {
                // parse是解析，将json解析成对象
                //后面加一个空的数组，因为如果没有todolist的时候，todolist为null，就会读取错误
                todoList: JSON.parse(localStorage.getItem('todoList')) || []
            }
        },
        methods:{
            // 添加一个todo列表
            // 这个方法传递给myheader调用
            addTodo(todoObj){
                this.todoList.unshift(todoObj)
            },
            // 修改每个todo的done
            checkTodo(id){
                this.todoList.forEach(todo => {
                    if(todo.id === id) todo.done = !todo.done
                });
            },
            // 删除一个todo
            deleteTodo(id){
                if(confirm('确认删除吗')){
                    this.todoList = this.todoList.filter(todo => todo.id !== id)
                }
            },
            // 全选或者全不选
            selectAllTodo(done){
                this.todoList.forEach(todo => todo.done = done)
            },
            // 清楚已完成的
            clearAllTodo(){
                this.todoList = this.todoList.filter(todo => !todo.done)
            }
        },
        components:{MyFooter,MyHeader,MyList},
        // 开启监视
        watch:{
            // 监视todolist
            todoList:{
                // 开启深度监视，深度监视可以监视到对象中的数据变化
                deep:true,
                // 处理方法，value就是变化的数据，在这里是添加的对象todoobj
                handler(value){
                    localStorage.setItem('todoList', JSON.stringify(value))
                }
            }
        }
}
</script>

<style >
    /*base*/
    body {
    background: #fff;
    }

    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }

    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }

</style>