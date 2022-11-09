<template>
    <div class="Sun">
      <h3>我是Sun组件(孙)</h3>
      <Dialog />
    </div>
  </template>
  
  <script>
  import Dialog from './Dialog.vue';
  export default {
    name:'Sun',
    components:{ Dialog }
    
  }
  </script>
  
  <style>
  .Sun{
    background-color: orange;
    padding:10px
  }
  </style>