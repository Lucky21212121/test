# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



### 虚拟DOM优点
 1.性能提升了
 2.它使得跨端应用得以实现. React Native
### 虚拟DOM中的Diff算法
  Diff 全称:different
  setState可以把多次setState结合成一次 减少虚拟DOM比对的次数
  同级比较  一层不满足 就不往下比对了
  能不用index作key值就不用 
### React中ref的使用
   ref获取DOM元素
  setState是异步函数,不会立即被执行
  ### React的生命周期函数
  生命周期函数指:在某一个时刻,组件会自动调用执行的函数

  1 在组件即将被挂载到页面的时刻自动执行,只会执行一次
    componentWillMount(){
        console.log('componentWillMount');
    }

     render(){}
     
  2 组件被挂载到页面之后,自动被执行,只执行一次
    componentDidMount(){
        console.log('componentDidMount');      
    }
  3 组件被更新之前,自动被执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true
    }
 4
    // 组件被更新之前,自动被执行,但是他在shouldComponentUpdate之后被执行
    // 如果shouldComponentUpdate返回true 才执行
    // 如果shouldComponentUpdate返回false 这个函数就不会被执行了
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
   5 组件更新完成之后，会自动执行
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
 6   
    // 当一个组件要从父组件接受参数
    // 如果这个组件第一次存在于父组件中,不会执行
    // 如果这个组件之前已经存在于父组件中,才会执行
    componentWillReceiveProps(){
        console.log('child componentWillReceiveProps');
    }

  7   当这个组件即将被从页面中剔除的时候,会被执行
    componentWillUnmount(){
        console.log(' child componentWillUnmount');
    }

### React进行ajax请求

import axios from 'axios'
componentDidMount(){
  axios.get('./api/todolist')
  .then((res)=>{
    console.log(res.data)
    this.setState(()=>({
      list:[...res.data]
    }))
  })
  .catch(()=>{alert('error')})

}