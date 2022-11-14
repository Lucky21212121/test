<template>
<div class="weather-info">
         <div class="weather-item">
            <span>5.66</span>
         </div>
         <div class="weather-item">
            <span>67%</span>
         </div>
         <div class="weather-item">
            <span>75%</span>
         </div>
      </div>
</template>

<script>
export default{
    name:'Weatherinfo',
}
</script>


<style lang="less">
// 底部

.weather-info{
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-top:2px solid rgba(0,0,0,0.1);
   padding-top: 20px;
   
}
.weather-item{
   color:var(--darkColor)
}
</style>