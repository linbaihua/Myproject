
// 引入vue
import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)

// 执行逻辑
const actions = {
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
    sum:0
}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state
})