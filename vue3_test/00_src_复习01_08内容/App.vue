<template>
  
  <Demo 
  @hello="showHelloMsg"
  msg="你好啊!"
  msg2="学习vue3的同学"
  >

  <template v-slot:chachao1>
    <h3>我是插槽1</h3>
  </template>
  <template v-slot:chachao2>
    <h2>我是插槽2</h2>
  </template>
 

</Demo>
  

</template>

<script>
import Demo from './components/Demo.vue'

export default {
  name: 'App',
  components:{Demo},

  setup(){

    function showHelloMsg(value){
      alert(`你好啊,你触发了hello事件,我收到的参数是${value}`)

    }

    return {
      showHelloMsg
    }
  }
  

  
}
</script>

<style>

</style>
