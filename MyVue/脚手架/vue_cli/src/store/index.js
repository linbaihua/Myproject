
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用vuex，vuex是作为插件使用的
/* 为什么不在 app 中vue.use 在这里直接就vue.use(vuex),因为规定要先使用
vue.user(vuex) 才可以 import store， 所以就直接在 store 中就先使用vuex */
Vue.use(Vuex)

// 创建 actions
const actions = {}
// 创建 mutations
const mutations = {}
// 创建 state
const state = {}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state
})