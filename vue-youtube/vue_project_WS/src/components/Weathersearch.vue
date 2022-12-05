<template>
<div class="why">
         <div class="weather-search">
         <input 
         type="text" 
         placeholder="请输入城市名" 
         class="search-control"
         v-model.trim="search"
         @keydown.enter="getData"  
         >
         <span class="country">({{getWearherCountry}})</span>
         <div class="err"></div>
      </div>
    </div>   
</template>

<script>
import  {mapActions,mapGetters} from 'vuex'
export default{
    name:'Weathersearch',
    data(){
      return{
         search: this.$store.state.search
      }
    },
    computed:{
      ...mapGetters(['getWearherCountry'])
    },
    methods:{
      ...mapActions(['fecthWeatherData']),
      getData(){
         this.fecthWeatherData(this.search)

      }
    }
}
</script>


<style lang="less">

// 搜索框
.weather-search{
position: relative;

}
.search-control{
   width:100%;
   height: 50px;
   border:2px solid rgba(0,0,0,0.1);
   border-radius:100px;
   outline:none;
   background-color: transparent;
   font-size:16px;

   transition:all 0.4s;
}
.country{
   position: absolute;
   top:50%;
   right:30px;
   transform: translateY(-50%);
   color:var(--grayColor);
}
.why{
   width: 300px;
}
</style>