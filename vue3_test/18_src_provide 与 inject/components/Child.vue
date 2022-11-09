<template>
    <div class="Child">
      <h3>我是Child组件(子)</h3>
      <Sun/>
    </div>
  </template>
  
  <script>

import Sun from './Sun.vue'

  export default {
    name:'Child',
    components:{Sun},
    /* setup(){
       let x = inject('car')
       console.log(x,"Child@@@");
    } */
  }
  </script>
  
  <style>
  .Child{
    background-color: skyblue;
    padding:10px
  }
  </style>