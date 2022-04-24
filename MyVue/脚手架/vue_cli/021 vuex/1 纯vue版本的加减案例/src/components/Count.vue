<template>
  <div>
      <h1>当前求和为：{{sum}}</h1>
      <!-- 加 number 修饰词后，下面的所有value就强制转换成 number 类型
      还有一种方法就是 :value 这样value后面的就是表达式，表达式读取的
      就是 js 语句，读出来也是number类型 -->
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
    export default {
        name:'Count',
        data() {
            return {
                sum:0, //求和
                n:0  //选择的数
            }
        },
        methods: {
            increment(){
                this.sum += this.n
            },
            decrement(){
                this.sum -= this.n
            },
            incrementOdd(){
                if (this.sum % 2) {
                    this.sum += this.n
                }
            },
            incrementWait(){
                setTimeout(() => {
                    this.sum += this.n
                },1000)
            },
        },
    }
</script>

<style lang="css">
    button{
        margin-left: 5px;
    }
</style>

