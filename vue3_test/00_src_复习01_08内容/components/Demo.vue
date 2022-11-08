<template>
  <h1>一,初始setup</h1>
  <h2>一个人的信息</h2>
  <h3>姓名:{{name}}</h3>
  <h3>年龄:{{age}}</h3>
  <button @click="sayHello">点击说话</button>
  <hr>
  <h1>二,ref函数</h1>
  <h2>一个人的工作信息</h2>
  <h3>姓名:{{name1}}</h3>
  <h3>年龄:{{age1}}</h3>
  <h3>工作种类:{{job.type}}</h3>
  <h3>工作薪资:{{job.salary}}k</h3>
  <button @click="changeInfo">修改人的信息</button>
  <hr>
  <h1>三,reacti函数</h1>
  <h2>一个人的信息</h2>
  <h3>姓名:{{person.name2}}</h3>
  <h3>年龄:{{person.age2}}</h3>
  <h3>工作种类:{{person.job1.type}}</h3>
  <h3>工作薪资:{{person.job1.salary}}k</h3>
  <h3>爱好:{{person.hobby}}</h3>
  <h3>隐藏在内心深处的:{{person.job1.a.b.c}}</h3>
  <button @click="changeInfo1">点击修改信息</button>
  <hr>
  <h1>四,setup的两个注意点</h1>
  <h3>{{msg}}</h3>
  <h3>{{msg2}}</h3>
  <button @click="hello1">点击触发hello事件</button><br><br>
  <slot name="chachao1"></slot>
  <slot name="chachao2"></slot>
  <button @click="showMsg">点击显示信息:props&context(attrs;slots;emits)</button>
  <hr>
  <h1>五,computed计算属性</h1>
  姓: <input type="text" v-model="person1.firstName">
  <br><br> 
  名: <input type="text" v-model="person1.lastName">
  <br><br>
  <span>全名:{{person1.fullName}} </span>
  <br><br>
  全名: <input type="text" v-model="person1.fullName">
  <hr>
  <h1>六,watch函数</h1>
  <h2>当前求和为:{{sum}}</h2>
  <button @click="sum++">点击+1</button>
  <h2>当前的信息是:{{msg3}}</h2>
  <button @click="msg3+='!'">点击修改信息</button>
  <h2>姓名:{{person2.name}}</h2>
  <h2>年龄:{{person2.age}}</h2>
  <h2>薪资:{{person2.job.j1.salary}}k</h2>
  <button @click="person2.name+='~'">修改姓名</button>
  <button @click="person2.age++">增长年龄</button>
  <button @click="person2.job.j1.salary++">加薪</button>




   
  </template>
  
  <script>
  // import {h} from 'vue'
  import {ref,reactive,computed,watch} from 'vue'
  
  export default {
    name: 'Demo',
    props:['msg','msg2'],
    emits:['hello'],
    setup(props,context){
    // 数据
    let name = '张三'
    let age = 18
    let name1 =ref("李四")
    let age1 = ref(18)
    let sum = ref(0)
    let msg3 =ref('你好啊')

    let job = ref({
      type:'前端工程师',
      salary:30
    })

    let person = reactive({
      name2:'箫无敌',
      age2:18,
      job1:{
        type:'前端工程师',
        salary:30,
        a:{
          b:{
            c:'箫无敌喜欢南星'
          }
        }
      },
      hobby:['喜欢南星','保护南星','一直配着南星']

    })

    let person1 = reactive({
      firstName:'张',
      lastName:'三'
    })
    let person2 = reactive({
      name:'南星',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // 计算属性 computed
    person1.fullName=computed({
      get(){
        return person1.firstName + '-' + person1.lastName
      },
      set(value){
        const nameArr = value.split('-')
        person1.firstName = nameArr[0]
        person1.lastName = nameArr[1]


      }
    })
    // 监视函数 watch
    /* watch(sum,(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue);
    },{immediate:true}) */
    /* watch([sum,msg3],(newValue,oldValue)=>{
      console.log('sum和msg3的值变化了',newValue,oldValue);
    }) */
   /*  watch(person2,(newValue,oldValue)=>{
      console.log('person2的值变化了',newValue,oldValue);
    }) */
   /*  watch(()=>person2.age,(newValue,oldValue)=>{
      console.log('person2的年龄变化了',newValue,oldValue);
    }) */
    /* watch([()=>person2.age,()=>person2.name],(newValue,oldValue)=>{
      console.log('~~~~~~~person2的年龄和姓名变化了',newValue,oldValue);
    }) */
    watch(()=>person2.job,(newValue,oldValue)=>{
      console.log('person2的工资变了',newValue,oldValue);
    },{deep:true})



    // 方法
    function sayHello(){
      alert(`${name}同学,你好啊!!`)

    }
    function changeInfo(){
      console.log(name1);
      console.log(job);
      name1.value ='王五'
      age1.value = 28
      job.value.type='UI设计师'
      job.value.salary=20

    }
    function changeInfo1(){
      person.name2="陈哲远"
      person.age2=26
      person.job1.type="演员"
      person.job1.salary="未知,但应该很多吧"
      person.job1.a.b.c="未知,但希望喜欢朋"
      person.hobby[0]="或许喜欢月月"


    }
    function hello1(){
      context.emit('hello','你很棒!!!!!')

    }
    function showMsg(){
      console.log('~~~props',props);
      console.log('!!!context',context);
      console.log('@@@context.attrs',context.attrs);
      console.log("###context.slots",context.slots);
      console.log("$$$context.emit",context.emit);

    }
      
    // 返回一个对象(常用)
    return { 
      name,
      age,
      sayHello,
      name1,
      age1,
      job ,
      changeInfo,
      person,
      changeInfo1,
      hello1,
      showMsg,
      person1,
      sum,
      msg3,
      person2
    }

    // return  ()=> h('h1','我返回的函数,h1标签,我替代了原本的内容')
  
     
    },
    
  }
  </script>
  
  <style>
  
  </style>
  