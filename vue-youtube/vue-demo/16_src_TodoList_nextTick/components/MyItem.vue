<template>
    <li>
          <label>
            <input type="checkbox" :checked="todo.done" @change="handleChecked(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
            type="text" 
            v-show="todo.isEdit"            
            :value="todo.title" 
            @blur="handleBlur(todo,$event)"
            ref="inputTitle"
            />
          </label>        
          <button class="btn btn-danger" @click="handledelete(todo.id)">删除</button>
          <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
        </li>

</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name:'MyItem',
    props:['todo'],
    methods: {
      handleChecked(id){
        // console.log(id);
        // this.checkTodo(id)
        this.$bus.$emit('aaacheckTodo',id)
        
      },

      handledelete(id){
        // console.log(id);
       if(confirm('确定删除吗?')){
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo',id)
        pubsub.publish('deleteTodo',id)

       }

      },
      // 编辑
      handleEdit(todo){
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit = true
          console.log('todo身上有idEdit');

        }else{
          console.log('todo身上没有idEdit');
          this.$set(todo,'isEdit',true)
        }

      /*  setTimeout(()=>{
        this.$refs.inputTitle.focus()
       },200) */
       
       this.$nextTick(function(){
        this.$refs.inputTitle.focus()
       })

      },
      // 失去焦点回调(真正执行修改逻辑)
      handleBlur(todo,e){
        todo.isEdit = false
        // console.log('updateTodo',todo.id,e.target.value);
        if(!e.target.value.trim()) return alert('输入不能为空!')
        this.$bus.$emit('updateTodo',todo.id,e.target.value)

      }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}
li:hover button {
  display:block;
}
</style>