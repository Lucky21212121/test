<template>
<div class="weather-main">
         <div class="weather-feelsLike">
            feels like
            <strong>13</strong>
            <sup>°</sup>   
         </div>
         <div class="weather-temp">
            <div class="weather-icon"></div>
            <span class="tem">14</span>
            <sup class="du">°</sup>
         </div>
         <div class="weather-description">broken clouds</div>
      </div>
</template>
   
<script>
export default{
    name:'Weathermain',
}
</script>


<style lang="less">

// 主要信息

.weather-main{
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   margin-top:40px;
   margin-bottom:40px;
}
.weather-feelsLike,
.weather-description{
   font-size:18px;
   color:var(--grayColor);
   text-transform: capitalize;

}
.weather-temp{
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 150px;
   height: 150px;
   border-radius: 100%;
   box-shadow: 0 0 40px rgba(0,0,0,0.2);
   background-color: #fff;
   margin:40px 0;
}
.weather-icon{
   position: absolute;
   top:-35px;
   left:-35px;
   width: 110px;
   height: 110px;
   background-image: url(../images/cloud.png);
   background-repeat: no-repeat;
   background-size: 100%;
   filter: drop-shadow(1px 1px 0 rgba(0,0,0,.03)) drop-shadow(-5px -5px 0 rgba(0,0,0,.03));
}
.tem{
   font-size:80px;
   font-weight: 800;
   letter-spacing: -2px;
}
.du{
   position: absolute;
   top:37px;
   right:10px;
   font-size:40px;
}
</style>