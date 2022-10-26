<template>
  <div class="container">
    <Category title="美食"  >
      <img slot="center" src="./veer-132833566.jpg" alt="">
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    
    </Category>
    <Category title="游戏"  >
      <ul slot="center">
         <li v-for=" ( g,index) in games " :key="index">{{g}}</li>
      </ul>
     <div class="foot" slot="footer" >
      <a href="http://www.atguigu.com">单机游戏</a>
      <a  href="http://www.atguigu.com">网络游戏</a>
     </div>

    </Category>
    <Category title="电影"  >
      <video slot="center" controls src="./mda-mh4d5tn0e89vvqrm.mp4"></video>
     <template v-slot:footer>
      <div  class="foot">
      <a href="http://www.atguigu.com">经典</a>
      <a href="http://www.atguigu.com">热门</a>
      <a href="http://www.atguigu.com">推荐</a>
      </div>
      <h4>欢迎前来观影</h4>
     </template>
    
    </Category>




   
  </div>

</template>

<script>
import Category from './components/Category.vue'


export default{
    name:'App',
    components:{Category},
    data (){
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        films:['《教父》','《拆弹专家》','《你好,李焕英》','《尚硅谷》',]
      }
    }
    }
  
</script>

<style scoped >
.container,
.foot {
  display:flex;
  justify-content: space-around;
}
video{
  width: 100%;
}
img {
    width: 100%;
}
h4{
  text-align: center;
}

</style>