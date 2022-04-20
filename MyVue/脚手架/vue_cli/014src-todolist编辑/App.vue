<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 将addtodo方法传递 -->
                <MyHeader @addTodo="addTodo"/>
                <!-- 将todoList传递给mylist组件
                这里的todoList要和下面return中的todoList写的要一样 -->
                <MyList :todoList='todoList' />
                <MyFooter :todoList='todoList' @selectAllTodo='selectAllTodo' @clearAllTodo='clearAllTodo'/>
             </div>
        </div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'

export default {
    name:'App',
        data() {
            return {
                // 在数组里面存对象
                todoList:[
                    // id使用string，不使用number类型，因为number有尽头，string没有
                    // 真正开发中用的都是hash值
                    {id:'001', title:'抽烟',done:true },
                    {id:'002', title:'喝酒',done:false },
                    {id:'003', title:'开车',done:true },
                ]
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
            deleteTodo(_,id){
                if(confirm('确认删除吗')){
                    this.todoList = this.todoList.filter(todo => todo.id !== id)
                }
            },
            // 更新一个todo
            updateTodo(id,title){
                this.todoList.forEach((todo) => {
                    if(todo.id === id) todo.title = title
                })
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
        // 使用全局事件总线监听事件
        mounted() {
            this.$bus.$on('checkTodo',this.checkTodo)
            this.$bus.$on('updateTodo', this.updateTodo)
            // 使用消息订阅完成删除功能
            this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)
        },
        // 解绑自定义事件
        beforeDestroy() {
            this.$bus.$off('checkTodo')
            this.$bus.$off('updateTodo')
            // 取消订阅
            pubsub.unsubscribe(this.pubId)
        },
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

    .btn-edit {
    color: #fff;
    background-color: #347e94;
    border: 1px solid #2e778d;
    margin-right: 5px;
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