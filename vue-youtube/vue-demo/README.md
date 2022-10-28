# vue-demo

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


# 笔记


## ref属性
```sh
  1.被用来给元素或子组件注册引用信息(id的替代者)
  2.应用在html标签上获取的是真实DOM元素,应用在组件标签上是组件实例对象(vc)
  3.使用方式:
     打标识: <h1 ref="xxx">.....</h1> 或 <school ref="xxx"></school>
     获取: this.$refs.xxx
```

## 配置项props
```sh
     功能: 让组件接收外部传过来的数据
      (1).传递数据:
      <Demo name="xxx"/>
      (2).接收数据:
         第一种方式(只接收):
         props:['name']

         第二种方式(限制类型):
         props: {
          name:String
         }
         
         第三种方式(限制类型,限制必要性,指定默认值):
         props : {
          name: {
            type:String, // 类型
            required :true, // 必要性
            default:'老王', // 默认值 
          }
         }
       备注:props是只读的,Vue底层会监测你对props的修改,如果进行了修改,就会发出警告,若业务需要确实需要修改,那么请复制props的内容到data中一份,然后去修改data中的数据   
```

## mixin(混入)
```sh
     功能: 可以把多个组件共用的配置提取成一个混入对象
     使用方式:
        第一步定义混合,例如:
           在mixin.js文件内
              export const mixin = {
                data(){....},
                methods(){....},
                ....
              }
              export const mixin2 = {
                data(){....},
                methods(){....},
                ....
              }

        第二步使用混入,例如:
             (1).全局混入:
               首先: 
                    import {mixin,mixin2} from './mixin.js'
               然后: 分别混入
                    Vue.mixin(mixin) 
                    Vue.mixin(mixin2) 

             
             (2).局部混入:
                首先: 
                      import {mixin,mixin2} from './mixin.js'
                然后: 
                      mixins:[mixin,mixin2]         
            
 ```            

## 插件
```sh
  功能:用于增强Vue
  本质:包含install方法的一个对象,install的第一个参数是Vue ,第二个以后的参数是插件使用者传递的数据
    第一步:定义插件:
    在plugins.js文件中
     export default {
      install = function(Vue,options) {
       // 1.添加全局过滤器
        Vue.filter(...)

      // 2.添加全局指令
        Vue.directive(...)

      // 3.配置全局混入(合)
        Vue.mixin(...)

      // 4.添加实例方法
      Vue.prototype.$myMethod = function(){...} 
      Vue.prototype.$myProperty = xxx 

     }
     }

    #  对象.install = function(Vue,options) {
    #    // 1.添加全局过滤器
    #     Vue.filter(...)

    #   // 2.添加全局指令
    #     Vue.directive(...)

    #   // 3.配置全局混入(合)
    #     Vue.mixin(...)

    #   // 4.添加实例方法
    #   Vue.prototype.$myMethod = function(){...} 
    #   Vue.prototype.$myProperty = xxx 

    #  }
     
  第二步:使用插件 :
    首先:
       import plugins from './plugins.js'
    然后:
       Vue.use(plugins)   
```


## scoped样式
```sh
 作用:让样式在局部生效,防止冲突
 写法: <style scoped>
```

## 总结TodoList案例
```sh
   1.组件化编码流程:

     (1).拆分静态组件:组件要按照功能点拆分,命名不要与html元素冲突

     (2).实现动态组件:考虑号数据的存放位置,数据是一个组件在用,还是一些组件在用: 
          (用:读或写)

         a.一个组件在用:放在组件自身即可

         b.一些组件在用:放在它们共同的父组件上(状态提升)

     (3).实现交互:从绑定事件开始
   
   2.props适用于:

     (1).父组件 ==> 子组件 通信

     (2),子组件 ==> 父组件 通信 (要求父先给子一个函数)   

   3.使用v-model时要切记:v-model绑定的值不能是props传过来的值,因为props是不可以修改的!

   4.props传过来的若是对象类型的值,修改对象中的属性时Vue不会报错,但不推荐这样做  

```  

## WebStorage
```sh
 1.存储内容大小一般支持5MB左右(不同浏览器可能还不一样)

 2.浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制
 
 3.相关API:
    1.xxxxStorage.setItem('key','value');
                 该方法接受一个键和值作为参数,会把键值对添加到存储中,如果键名存在,则更新其对应的值

    2.xxxxStorage.getItem('person');           
                 该方法接受一个键名作为参数,返回键名对应的值

    3.xxxxStorage.removeItem('person');  
                 该方法接受一个键名作为参数,并把该键名从存储中删除

    4.xxxxStorage.clear();
                 该方法会清空存储中的所有数据 

  4.备注:

    1.sessionStorage存储的内容会随着浏览器窗口关闭而消失

    2.localStorage存储的内容,需要手动清除才会消失

    3.xxxxStorage.getItem(XXXX);如果XXXX对应的value获取不到,那么getItem返回值是null

    4.JSON.parse(null)的结果依然是null        

```


## 组件的自定义事件
```sh
1.一种组件间通信的方式,适用于:子组件===>父组件

2.使用场景: A是父组件,B是子组件,B想给A传数据,那么就要在A中给B绑定自定义事件(事件的回调在A中)

3.绑定自定义事件:

  1.第一种方式,在父组件中: <Demo @atguigu = "test"/> 或 <Demo v-on:atguigu = "test"/>

  2.第二种方式,在父组件中:
     
     <Demo ref= "demo"/>
     ...
     mounted(){
      this,$refs.xxx.$on('atguigu',this.test)
     }
  3.若想让自定义事件只能触发一次,可以使用once修饰符,或$once方法

4.触发自定义事件: this.$emit('atguigu',数据)

5.解绑自定义事件:this.$off('atguigu')

6.组件上也可以绑定原生DOM事件,需要使用native修饰符

7.注意:通过this,$refs.xxx.$on('atguigu',回调)绑定自定义事件时,回调要么配置在methods中,要么使用箭头函数,否则this指向会出现问题

```

## 全局事件总线(GlobalEventBus)
```sh
1.一种组件间通信的方式,适用于任意组件间通信

2.安装全局事件总线:
   new Vue({
    .....
    beforeCreate(){
      Vue.prototype.$bus = this  //安装全局事件总线,$bus就是当前应用的vm
    },
    .....
   })

3.使用事件总线
   
    (1).接收数据:A组件想接收数据,则在A组件中给$bus绑定自定义事件,事件的回调留在A组件自身
        methods(){
          demo(data){.......}
        }
        .....
        mounted(){
          this.$bus.$on('xxxx',this.demo)
        }
     (2).提供数据:this.$bus.$emit('xxxx',数据)   

4.最好在beforeDestroy钩子中,用$off去解绑当前组件所用到的事件     

```

## 消息订阅与发布(pubsub)
```sh
1.一种组件间通信的方式,适用于任意组件间通信

2.使用步骤
 
   (1).安装pubsub : npm i pubsub-js

   (2).引入: import pubsub from 'pubsub-js'

   (3).接收数据:A组件想接收数据,则在A组件中订阅消息,订阅的回调留在A组件自身
        methods: {
          demo(msgName,data){......}
        }
        .....
        mounted(){
          this.pubId = pubsub.subscribe('xxx',this.demo) // 订阅消息
        }
    (4).提供数据: pubsub.publish('xxx',数据)

    (5).最好在beforeDestroy钩子中,用 pubsub.unsubscribe(this.pubId)去取消订阅     
```
## nextTick
```sh

1.语法: this.$nextTick(回调函数)

2.作用:在下一次DOM更新结束后执行其指定的回调

3.什么时候用:当改变数据后,要基于更新后的新DOM进行某些操作时,要在nextTick所指定的回调函数中执行

```
## Vue封装的过度与动画
```sh
1.作用:在插入,更新或移除DOM元素时,在合适的时候给元素添加样式类名

2.图示:
   Vue封装的过度与动画_图示.jpg

3.写法:
 
  (1).准备好样式:

     A 元素进入的样式:

       a v-enter:进入的起点

       b v-enter-active :进入过程中

       c v-enter-to :进入的终点

    B 元素离开的样式:

      a v-leave: 离开的起点

      b v-leave-active: 离开过程中

      c v-leave-to: 离开的终点 
  (2).使用<transition>包裹要过度的元素,并配置name属性:

     <transition name="hello">
         <h1 v-show="isShow">你好啊!</h1>
     </transition>

  (3).备注:若有多个元素需要过度,则需要使用:<transition-group>,且每个元素都要知道key值  

      
    
```

## 插槽
```sh
1.作用:让父组件可以向子组件指定位置插入html结构,也是一种组件间通信的方式,适用于父组件===>子组件

2.分类: 默认插槽, 具名插槽,作用域插槽

3.使用方式:

  (1).默认插槽
     父组件中: 
            <Category>
                 <div>html结构1</div>
            </Category> 
     子组件中:
           <template>
                 <div?>
                 <!-- 定义插槽 -->
                 <slot>插槽默认内容</slot>
                 </div>
          </template>     

  (2).具名插槽
      父组件中: 
            <Category>
                <template slot="center">
                 <div>html结构1</div>
                 </template>   
            </Category> 

            <Category>
                <template v-slot:footer>
                 <div>html结构2</div>
                 </template>   
            </Category> 
     子组件中:
           <template>
                 <div?>
                <!-- 定义插槽 -->
                 <slot name="center">插槽默认内容...</slot>
                 <slot name="footer">插槽默认内容...</slot>
                 </div>
          </template>   

  (3).作用域插槽    

     a.理解:数据在组件(定义插槽的组件)的自身,但根据数据生成的结构需要组件的使用者来决定 (games数据在Category组件中,但使用数据所遍历出来的结构由App组件决定)      

     b.具名编码:
         父组件中:
            <Category title="one">
                <template scope="scopeDate">
                <!-- 生成的是ul列表 -->
                 <ul>
                     <li v-for=" g in scopeDate.games " :key="g" >{{g}}</li>
                 </ul>
                </template>
            </Category>

             <Category>
                <template slot-scope="scopeDate">
                <!-- 生成的是h4标题 -->
                 <ul>
                     <li v-for=" g in scopeDate.games " :key="g" >{{g}}</li>
                 </ul>
                </template>
            </Category>
        子组件中:
          <template>
            <div>
              <h4>{{title}}</h4>
               <slot :games="games"></slot>
            </div>
          </template>

          <script>
            export default {
              name:'Category',
              props:['title'],
              // 数据在子组件自身
              data(){
                return {
                  games:['红色警戒','穿越火线','劲舞团','超级玛丽'],      
                }
              }
            }
          </script> 



```
## Vuex
```sh
### 1.概念
  在Vue中实现集中式状态(数据)管理的一个Vue插件,对vue应用中多个组件的共享状态进行集中式的管理(读写),也是一种组件间通信的方式,且适用于任意组件间通信

### 2.何时使用?
  多个组件需要共享数据时

### 3.搭建vuex环境
  (1).创建文件:src/store/index.js
        // 引入Vue核心库
        import Vue from 'vue'
        // 引入Vuex
        import Vuex from 'vuex'
        // 应用Vuex插件
        Vue.use(Vuex)
        
        // 准备actions-----用于响应组件中的动作
        const actions = {}
        // 准备mutations-----用于操作数据(state)
        const mutations = {}
        // 准备state-----用于存储数据
        const state = {}


        // 创建并暴露store
        export default new Vuex.Store({
            actions,
            mutations,
            state,
        })
  (2).在main.js中创建vm时传入store配置项
       .......
       // 引入store
       import store from './store/index'
       .......
     
      // 创建vm
         new Vue({
            el:'#App',
            render:(h)=>h(App),
            store,
          })
### 4.基本使用
1.初始化数据,配置actions 配置mutations 操作文件store.js    

   // 引入Vue核心库
   import Vue from 'vue'

   // 引入Vuex
   import Vuex from 'vuex'
   // 应用Vuex插件
   Vue.use(Vuex)

    const actions = {
          //  响应组件中的动作
          jia(context,value){
              // console.log('actions中的jia被调用了',context,value);
              context.commit('JIA',value)
           },
       }

    const mutations = {
          // 执行加
         JIA(state,value){
             // console.log('mutations中的JIA被调用了',state,value);
             state.sum += value
          },
        }
    // 初始化数据
    const state = {
          sum:0, //当前的和
        }


    // 创建并暴露store
    export default new Vuex.Store({
                      actions,
                      mutations,
                      state,
          })  

2.组件中读取vuex中的数据: $store.state.sum

3.组件中修改vuex中的数据: $store.dispatch('actions中的方法名',数据) 或 $store.commit('mutations重的方法名',数据)

    备注: 若没有网络请求或其他业务逻辑,组件中也可以越过actions,即不写dispatch,直接编写commit


### 5.getters的使用
1.概念: 当state中的数据需要经过加工后再使用时,可以使用getters加工

2.在store.js中追加getters配置

   ......
   const getters ={
    bigSum(state){
        return state.sum*10
    }
}
   // 创建并暴露store
   export default new Vuex.Store({
        .....
        getters,
   })

3.组件中读取数据: $store.getters.bigSum

### 6.四个map方法的使用

1.mapState方法: 用于帮助我们映射state中的数据为计算属性
        computed : {
          // 借助mapState生成计算属性,从state中读取数据 (对象写法)
        ...mapState({sum:'sum',school:'school',subject:'subject'}),

        // 借助mapState生成计算属性,从state中读取数据 (数组写法)  
        ...mapState(['sum','school','subject']),
        }

2.mapGetters方法:用于帮助我们映射getters中的数据为计算属性   
         computed : {
          // 借助mapGetters生成计算属性,从getters中读取数据 (对象写法)
          ...mapGetters({bigSum:'bigSum'}),

          // 借助mapGetters生成计算属性,从getters中读取数据 (对象写法)
          ...mapGetters(['bigSum']),
         }     

3.mapActions方法:用于帮助我们生成与actions对话的方法,即:包含$store.dispatch(xxx)的函数
         methods : {
          // 借助mapActions生成对应的方法,方法中会调用dispatch去联系actions(对象写法)
            ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

        // 借助mapActions生成对应的方法,方法中会调用dispatch去联系actions(数组写法)
            ...mapActions(['jiaOdd','jiaWait']),
  
              }  

4.mapMutations方法:用于帮助我们生成与mutations对话的方法,即:包含$store.commit(xxx)的函数
          methods : {
            // 借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(对象写法)
             ...mapMutations({increment:'JIA',decrement:'JIAN'}),

            // 借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(数组写法)
            ...mapMutations(['JIA','JIAN']),
          }

    备注:mapActions与mapMutations使用时,若需要传递参数,需要在模板中绑定事件时传递好参数,否则参数是事件对象


### 7.模块化+命名空间

1.目的:让代码更好维护,让多种数据分类更加明确

2.修改store.js

   const countAbout = {
    namespaced:true, // 开启命名空间
    state:{x:1},
    mutations :{ ....},
    actions : {....},
    getters : {
      bigSum(state){
        return state.sum*10

      }
    }
   }

   const personAbout = {
    namespaced:true, // 开启命名空间
    state:{....},
    mutations :{ ....},
    actions : {....},
    getters : {},
   }

   const store =new Vuex.store({
    modules:{
      countAbout,
      personAbout
    }
   })

3.开启命名空间后,组件中读取state数据
    // 方式一:自己直接读取:
      this.$store.state.personAbout.personList
    // 方式二:借助mapState读取:
      ...mapState('countAbout',['sum','school','subject']),

4.开启命名空间后,组件中读取getters数据:
    // 方式一:自己直接读取:
       this.$store.getters['personAblout/firstPersonName']
    // 方式二:借助mapGetters读取:   
        ...mapGetters('countAbout',['bigSum'])

5.开启命名空间后,组件中调用dispatch :
    // 方式一:自己直接dispatch:
       this.$store.dispatch('personAblout/addPersonWang',person)
    // 方式二:借助mapActions:
      ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

6.开启命名空间后,组件中调用commit:
    // 方式一:自己直接commit:
        this.$store.commit('personAbout/ADD_PERSON',personObj)
    // 方式二:借助mapMutations:
        ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),


      



```