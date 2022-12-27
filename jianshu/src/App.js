
import React,{Component} from "react";
import { Provider } from "react-redux";
import {HashRouter,Route,BrowserRouter,Switch } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";
import store from './store/index';

class App extends Component {
 render(){
  return (
    <Provider store={store}>
      <HashRouter>
      <div>
      <Header/>
      <Route path='/' exact component={Home}></Route>
      <Route path='/login'  component={Login}></Route>
      <Route path='/write'  component={Write}></Route>
      <Route path='/detail/:id'  component={Detail}></Route>
     
      </div>
      </HashRouter>
     
    </Provider>
  );
 }
}

export default App;
