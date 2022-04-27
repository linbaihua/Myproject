
// 引入vue
import Vue from 'vue'

// 引入vuex
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)

    const countOptions = {
        namespaced:'countAbout',
        actions:{
            // actions 中的方法参数是context，而mutations参数是state
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
        },
        mutations:{
            ADD(state,value){
                state.sum += value
            },
            DEC(state,value){
                state.sum -= value
            },
        },
        state:{
            sum:0,
            school:'厦门理工',
            address:'福建',
        },
        getters:{
            // state作为参数
            bigSum(state){
                return state.sum*10
    }
        }
    }
    const personOptions = {
        namespaced:'personAbout',
        actions:{},
        mutations:{
            ADD_PERSON(state,value){
                state.personList.unshift(value)
            }
        },
        state:{
            personList:[
                {id:'001',name:'张三'}
            ]
        },
        getters:{}
    }
// 创建并暴露 store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})