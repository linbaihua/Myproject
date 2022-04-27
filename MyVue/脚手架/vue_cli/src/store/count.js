

export default{
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