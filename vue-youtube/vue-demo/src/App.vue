<template>
   <div id="app" >
      <!-- <div class="card"> 
        
         <div>搜索组件</div>
         <div>main组件</div>
         <div>info组件</div>
      </div> -->
      <Flex/>
   
   
  </div>

</template>

<script>
// import WeatherSearch from './components/WeatherSearch.vue';
import Flex from './flex.vue';
export default{
    name:'App',
   //  components:{WeatherSearch,}
    components:{Flex,}

   
   }
  
</script>

<style lang="less" >
:root {
   --aaa:360px;
   --bbb:#f1f1f1;

}



.card {
   max-width:var(--aaa);
   width:100%;
   background-color:var(--bbb);

}


</style>