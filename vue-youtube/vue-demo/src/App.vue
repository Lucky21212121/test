<template>
   <div id="app" class="app">
      <div class="card"> 
         <WeatherSearch/>
      </div>
   
  </div>

</template>

<script>
import WeatherSearch from './components/WeatherSearch.vue';
export default{
    name:'App',
    components:{WeatherSearch,}
   
   }
  
</script>

<style lang="less" >

:root {
   --cardWidth: 360px;
  --darkColor: #666;
  --grayColor: #999;
  --cardBgColor: #f1f1f1;
  --cloudAnimateTime: 150s;
  --clearAnimationTime: 120s;
  --snowAnimateTime: 15s;
  --rainAnimateTime: 70s;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
}
body {
  background-color: fade(#000, 30);
  overflow: hidden;
}
.app {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
}
.card {
   max-width: var(--carWidth);
   width:100%;
   padding:40px;
   margin:20px;
   border-radius: 20px;
   box-shadow: 0 0 70px fade(black,30);
   z-index:9999;
   background-color: var(---cardBgColor);

}

</style>