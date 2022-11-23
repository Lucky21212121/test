import Vue from 'vue'
import App from './App.vue'

import store from './store/store'

// 关闭Vue的生产提示
Vue.config.productionTip=false






// 创建vm
 new Vue({
    el:'#App',
    render:(h)=>h(App),
    store,
   
   
})
