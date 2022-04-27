
// 引入vue
import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'

// 使用vuex
Vue.use(Vuex)

// 创建并暴露 store
export default new Vuex.Store({
    modules:{
        // about时key,options时value
        countAbout:countOptions,
        personAbout:personOptions
    }
})