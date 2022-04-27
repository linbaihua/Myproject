
// 引入vue
import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)

// 执行逻辑
const actions = {
    // context就是minstore,context可以访问dispatch，commit，state等
    // value是 组件传过来的数据
    addOdd(context,value){
        if (context.state.sum % 2) {
            context.commit('ADD',value)
        }
    },
    addWait(context,value){
        setTimeout(() => {
            context.commit('ADD',value)
        }, 1000);
    }
}

// 数据执行结果
const mutations = {
    ADD(state,value){
        state.sum += value
    },
    DEC(state,value){
        state.sum -= value
    },
}

// 存放公共数据
const state = {
    sum:0,
    school:'厦门理工',
    address:'福建'

}

// 对state中的数据进行操作一下
const getters = {
    // state作为参数
    bigSum(state){
        return state.sum*10
    }
}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})