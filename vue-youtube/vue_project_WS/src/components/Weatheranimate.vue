<template>
<div>
    <div 
    class="weather-animate"   
    ></div>
</div>
</template>
<script>
export  default {
    name:'Weatheranimate',
}
</script>
   
<style lang="less">
.weather-animate{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    transition:background-image 2s ;
    background-size: cover;
    background-position: center;

}
</style>