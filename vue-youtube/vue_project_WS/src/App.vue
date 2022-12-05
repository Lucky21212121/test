<template>
<div class="app">
   <div class="card">
      <Weathersearch/>
      
      <Weathermain/>
      <Weatherinfo/>

   </div>
 <Weatheranimate/>
</div>
</template>

<script>
import Weathersearch from './components/Weathersearch.vue'
import Weathermain from './components/Weathermain.vue'
import Weatherinfo from './components/Weatherinfo.vue'
import Weatheranimate from './components/Weatheranimate.vue'



export default{
   name:'App',
   components:{Weathersearch,Weathermain,Weatherinfo,Weatheranimate}
}
</script>

<style lang="less">
:root {
   --cardWidth:300px;
   --cardBgColor:#f1f1f1;
   --grayColor:#999;
   --darkColor:#666;
}
.app{
   display: flex;
   align-items: center;
   justify-content: center;
   height:100vh;
}
.card {
   max-width:var(--cardWidth);
   width:100%;
   padding:30px;
   margin:20px;
   border-radius:20px;
   box-shadow: 0 0 70px rgb(0 0 0 / 30%);
   z-index:9999;
   background-color: var(--cardBgColor);
}





</style>