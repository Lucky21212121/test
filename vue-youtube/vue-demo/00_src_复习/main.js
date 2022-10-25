import Vue from 'vue'
import App from './App.vue'
import {mixin,mixin2} from './mixin'
import plugins from './plugins'
Vue.config.productionTip=false


Vue.mixin(mixin)
Vue.mixin(mixin2)
Vue.use(plugins)

new Vue({
    el:'#App',
    render:(h)=>h(App)
})