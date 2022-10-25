<template>
<div>
    <h1 >{{msg}}</h1>
    <hr/>
    <h1 ref="one">{{content1}}</h1>
    <school ref="two" />
    <button @click="showInfo" ref="three">点击显示信息</button>
    
    <hr />
    <h1>{{content2}}</h1>
    <Student name="箫无敌" sex="男" :age=18 />

</div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default{
    name:'App',
    components:{School,Student},
    data(){
        return {
            msg:'欢迎学习Vue!!!',
            content1:'1_ref属性',
            content2:'2_props配置'
        }
    },
    methods:{
        showInfo(){
            console.log('第一:ref属性');
            console.log(this.$refs.one);
            console.log(this.$refs.two);
            console.log(this.$refs.three);
        }
    }
}
</script>

<style>

</style>