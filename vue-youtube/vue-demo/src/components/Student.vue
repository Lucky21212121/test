<template>
<div>
    <h2 @click="showName">学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{myAge}}</h2>
    <button @click="updateAge">点击修改学生年龄</button>
    <button @click="showX">点击显示x</button>
    <button @click="testHello">点击测试hello</button>
    <button @click="testA">点击输出A</button>
    <button @click="showMixin">点击显示插件中的混合&混入</button>
    <input type="text" v-fbind:value="sex">

</div>

</template>

<script>
import {mixin} from '../mixin'
export default {
    name:'Student',
    props:['name','sex','age'],
    mixins :[mixin],
    data(){
       return {
        myAge:this.age
       }
    },
    methods:{
        updateAge(){
            this.myAge++
        },
        testHello(){
            this.hello()
        },
        testA(){
            console.log(this.A);
        }
        
    }

       
    }
</script>

<style>

</style>
