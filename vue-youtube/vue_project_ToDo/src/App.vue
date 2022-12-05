<template>

  <div id="test">
    {{text}}
  </div>

</template>

<script>


export default{
    name:'App',
       data(){
      return {
        text:'abc'
      }
    }
    }
  
</script>

<style>

#test{
  color:red;
}
</style>