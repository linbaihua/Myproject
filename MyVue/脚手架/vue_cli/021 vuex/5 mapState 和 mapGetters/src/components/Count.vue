<template>
  <div>
      <!-- 在插值语法和v-xxx 中可以直接调用 vc中的属性 -->
        <h1>当前求和为：{{sum}}</h1>
        <h2>当前的数字的十倍：{{bigSum}}</h2>
        <h2>学校是{{school}} 地址是{{address}}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">和为奇数再求和</button>
        <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
                n:0  //选择的数
            }
        },
        methods: {
            increment(){
                // 在函数中需要使用this调用vc中的属性
                this.$store.commit('ADD',this.n)
            },
            decrement(){
                this.$store.commit('DEC',this.n)
            },
            incrementOdd(){
                this.$store.dispatch('addOdd',this.n)
            },
            incrementWait(){
                this.$store.dispatch('addWait',this.n)
            },
        },
        computed:{
            ...mapState(['sum','school','address']),
            ...mapGetters(['bigSum'])
        }
    }
</script>

<style lang="css">
    button{
        margin-left: 5px;
    }
</style>

