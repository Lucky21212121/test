<template>
<div>
    <h2 @click="showName">学校名字:{{name | myslice}}</h2>
    <h2>学校地址:{{address | myslice}}</h2>
    <button @click="showY">点击显示Y</button>
    <button @click="showMixin">点击显示插件中的混合&混入</button>
    

</div>
</template>

<script>


export default{
    name:'School',
    data(){
        return {
            name:'尚硅谷atguigu',
            address:'北京市昌平区'
        }
    },
   
}
</script>

<style>

</style>