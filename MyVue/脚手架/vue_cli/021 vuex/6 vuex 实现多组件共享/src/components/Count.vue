<template>
  <div>
      <!-- 在插值语法和v-xxx 中可以直接调用 vc中的属性 -->
        <h1>当前求和为：{{sum}}</h1>
        <h2>当前的数字的十倍：{{bigSum}}</h2>
        <h2>学校是{{school}} 地址是{{address}}</h2>
        <h2 style="color:red">学生人数是:{{personList.length}}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <!-- 当使用映射时把n作为参数传过去 -->
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">和为奇数再求和</button>
        <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
        name:'Count',
        data() {
            return {
                n:0  //选择的数
            }
        },
        methods: {

            // 写法有对象写法和数组写法，这里是对象写法，key是函数，value是传递过去的函数
            ...mapActions({incrementOdd:'addOdd', incrementWait:'addWait'}),

            ...mapMutations({increment:'ADD', decrement:'DEC'})
            
        },
        computed:{
            // 写法有对象写法和数组写法，这里是数组写法
            ...mapState(['sum','school','address','personList']),
            ...mapGetters(['bigSum'])
        }
    }
</script>

<style lang="css">
    button{
        margin-left: 5px;
    }
</style>

