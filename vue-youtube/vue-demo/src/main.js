import Vue from 'vue'
import App from './App.vue'


// 关闭Vue的生产提示
Vue.config.productionTip=false
Vue.filter("round", function(value, decimals) {
    if (!value) {
      value = 0;
    }
  
    if (!decimals) {
      decimals = 0;
    }
  
    value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    return value;
    
  });





// 创建vm
 new Vue({
    el:'#App',
    render:(h)=>h(App),
   
   
})
