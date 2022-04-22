<template>
     <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" 
        v-model='title'
        @keyup.enter="add"/>
    </div>
</template>

<script>
// 一个生产id的库
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    // 接收app传过来的addtodo方法
    // props:['addTodo'],
    data() {
        return {
            // 收集用户输入的title
            title:''
        }
    },
    methods: {
        add(){
            // 检验数据是否为空
            if(!this.title.trim()) return alert('输入不能为空')
            // 将输入的文字变成一个对象
            const todoObj = {id:nanoid(), title:this.title, done:false}
            // 调用app组件传过来的todoObj
            this.$emit('addTodo',todoObj)
            // 输入完以后输入框清空
            this.title = ''
        }
    },
}
</script>

<style scoped>
    /*header*/
    .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    }

    .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }

    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>