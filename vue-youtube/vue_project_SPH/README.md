## day1
1.采用vue-cli脚手架初始化项目
 node + webpack

 node_modules 文件夹:项目依赖

 public文件夹:一般放置一些静态资源,需要注意,放置public文件夹中的静态资源,webpack进行打包的时候,会原封不动打包到dist文件夹中

 src文件夹(程序员源代码文件夹):
   assets文件夹:一般也是放置静态资源(一般放置多个组件共用的静态资源),需要注意,放置在assets文件夹里面的静态资源,在webpack打包的时候,webpack会把静态资源当做一个模块,打包js文件里面
   components文件夹:一般放置的是非路由组件(全局组件)
   App.vue:唯一的根组件,Vue当中的组件(.vue)
   main.vue:程序的入口文件,也是整个程序当中最先执行的组件

  babel.config.js :配置文件(babel相关)
  package.json文件:认为项目"身份证",记录项目叫做什么,项目当中有哪些依赖,项目怎么运行
  README.md:说明性文件

  2.项目的其他配置
  2.1 项目运行起来的时候,浏览器自动打开
  ---package.json
  "scripts":{
    "serve":"vue-cli-service serve---open"
  }
  2.2 eslint校验功能关闭
  ---在根目录下,创建一个vue.config.js
  比如:声明变量但是没有使用eslint校验工具报错
  2.3 src文件夹简写方法,配置别名 @代表的是src文件夹
  ---在根目录下,创建一个jsconfig.json文件 配置别名@提示
  {
    "compilerOptions":{
        "baseUrl":"./",
        "path":{
            "@/*":["src/*"]
        }
    },
    "exclude":["node_modules","dist"]
  }

  3.项目路由的分析
  vue-router
  前端所谓路由:kv键值对
  key:URL(地址栏中的路径)
  value:相应的路由组件
  
  注意:项目上中下结构

  路由组件:
  Home首页路由组件,Search搜索路由组件,Login登录路由组件,Refister注册路由组件
  非路由组件:
  Header (在首页和搜索页)
  和 Footer(在首页和搜索页有,在登录和注册页是没有的)

  4.完成非路由组件Header和Footer


