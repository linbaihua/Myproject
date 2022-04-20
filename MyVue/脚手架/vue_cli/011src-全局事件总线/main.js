import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局总线
  }
}).$mount('#app')

/* 
  bus只有安装在全局vue.prototype上，且bus是一个vc,或者vm才可以使用
  $on, $emit, $off等方法，所以将 vm 设置为bus
*/
