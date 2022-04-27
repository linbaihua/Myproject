<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red">Count组件求和为：{{sum}}</h3>
        <h3 style="color:orange">列表中第一个人的名字是：{{firstPersonName}}</h3>
        <!-- 绑定一个按下回车键的事件和添加的效果一样 -->
        <input type="text" placeholder="请输入名字" v-model="name" @keydown.enter="add">
        <button @click="add">添加</button>
        <button @click="addPersonWang">添加一个姓王的人</button>
        <button @click="addSentence">添加一句话</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import {mapState} from 'vuex'
    import axios from 'axios'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                // getters和state的路径不一样，getters时下面这种路径
                /* 这种路径不能以点的形式（变量名）进入，所以要使用中括号的形式传入变量 */
                return this.$store.getters['personAbout/firstPersonName']
            }
        },
        methods: {
            add(){
                const personObj = {id:nanoid(), name:this.name}
                this.$store.commit('personAbout/ADD_PERSON', personObj)
                this.name = ''
            },
            addPersonWang(){
                this.$store.dispatch('personAbout/addPersonWang',{id:nanoid(),name:this.name})
                this.name = ''
            },
            addSentence(){
                this.$store.dispatch('personAbout/addSentence')
            }
        },
    }
</script>