<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red">Count组件求和为：{{sum}}</h3>
        <!-- 绑定一个按下回车键的事件和添加的效果一样 -->
        <input type="text" placeholder="请输入名字" v-model="name" @keydown.enter="add">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import {mapState} from 'vuex'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            ...mapState('personAbout',['personList']),
            ...mapState('countAbout',['sum'])
        },
        methods: {
            add(){
                const personObj = {id:nanoid(), name:this.name}
                this.$store.commit('personAbout/ADD_PERSON', personObj)
                this.name = ''
            }
        },
    }
</script>