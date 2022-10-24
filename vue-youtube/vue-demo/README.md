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
              {
                data(){....},
                methods(){....},
                ....
              }
        第二步使用混入,例如:
             (1).全局混入:Vue.mixin(xxx)
             (2).局部混入:mixins:['xxx']    
 ```            

## 插件
```sh
  功能:用于增强Vue
  本质:包含install方法的一个对象,install的第一个参数是Vue ,第二个以后的参数是插件使用者传递的数据
  定义插件:
     对象.install = function(Vue,options) {
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
  使用插件 : Vue.use()   
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