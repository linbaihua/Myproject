<template>
    <li>
        <label>
            <!-- checked表示默认选中复选框，checked这里有没有，取决于todo.done
                done=true，就有checked
                :checked 是伪类选择器，当它的值为true时，就有效，为false无效 -->
            <input type="checkbox" 
                :checked='todo.done' 
                @change="checkHandle(todo.id)"   
            />

            <!-- 下面的代码也能实现修改todo的done值，但是不推荐使用，因为todo是props接收的，
            这样做等于修改了props，但是props是只读的，不推荐修改 -->
            <!-- <input type="checkbox" v-model='todo.done'/> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <!-- 编辑输入框， blur时失去焦点事件 -->
            <input 
                v-show="todo.isEdit" 
                type="text" 
                :value='todo.title' 
                @blur="handleBlur(todo,$event)"
                ref='inputTitle'
            >
        </label>
        <button class="btn btn-danger" @click="deleteHandle(todo.id)" >删除</button>
        <button v-show="!todo.isEdit" class='btn btn-edit' @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    // 接收todo对象
    props:['todo'],
    methods: {
        // 改变勾选
        checkHandle(id){
            // 使用事件总线传递给自定义事件数据
            this.$bus.$emit('checkTodo', id)
        },
        // 删除todo
        deleteHandle(id){
            // 发布消息
            pubsub.publish('deleteTodo',id)
        },
        // 编辑输入框
        handleEdit(todo){
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(todo,'isEdit',true)
            }
            // nextTick下一次dom执行完后执行
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
        },
        // 失去焦点事件
        handleBlur(todo,e){
            todo.isEdit = false
            if (!e.target.value.trim()) {
                return alert('输入不能为空')
            }
            this.$bus.$emit('updateTodo',todo.id,e.target.value)

        }
    },
}
</script>

<style scoped>
    /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }

    li:hover{
        background-color: aliceblue;
    }

    li:hover button{
        display: block;
    } 

</style>