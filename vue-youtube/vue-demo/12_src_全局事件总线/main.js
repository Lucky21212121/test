// 引入Vue
import Vue from 'vue'
// 引入APP
import App from './App.vue'


// 关闭Vue的生产提示
Vue.config.productionTip = false

// window.x={a:1,b:2}
// VueComponent.prototype.x={a:1,b:2}  // 报错

/* const Demo = Vue.extend({})
const d= new Demo()
Vue.prototype.x = d */



// 创建vm
new Vue ({
    el:'#App',
    render:(h)=>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this    // 安装全局事件总线
    }

})