<template>
  <div class="app">
    <h3>我是App组件(祖)</h3>
    <Suspence>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback >
        <h3>稍等,加载中......</h3>
      </template>     
    </Suspence>
    
  </div>
</template>

<script>

  // import Child from './components/Child.vue'  // 静态引入
  import { defineAsyncComponent} from 'vue' // 异步(动态)引入
  const Child = defineAsyncComponent(()=>import('./components/Child.vue') ) 
  export default {
    name:'App',
    components:{Child},  
  }
</script>

<style>
.app{
  background-color: gray;
  padding:10px
}
</style>