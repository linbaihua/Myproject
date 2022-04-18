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
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="deleteHandle(todo.id)" >删除</button>
    </li>
</template>

<script>
export default {
    name:'MyItem',
    // 接收todo对象
    props:['todo','checkTodo','deleteTodo'],
    methods: {
        // 改变勾选
        checkHandle(id){
            this.checkTodo(id)
        },
        // 删除todo
        deleteHandle(id){
            this.deleteTodo(id)
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