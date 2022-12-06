import React,{Component} from "react";
import store from './store/index'
import {getInputChangeAction, getAddItemAction,getDeleteItemAction ,initListAction} from './store/actionCreators'
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'
import TodoListUI from "./TodoListUI";
import axios from "axios";
class TodoList extends Component {

    constructor(props){
        super(props);
        this.state =store.getState()
        // console.log(store.getState());
        // console.log(this.state);
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleStoreChange=this.handleStoreChange.bind(this)
        this.handleBtnClick=this.handleBtnClick.bind(this)
        this.handleItemDelete=this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render(){
        return <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
        />        
    }
    componentDidMount(){
      axios.get('http://localhost:10086')
      .then((res)=>{
        // console.log(res);
        const data = res.data 
        const action = initListAction(data)
      store.dispatch(action)
      }).catch((err)=>{
       console.log(err.message);
      })

    }
  handleInputChange(e){
   /*  const action = {
      type:CHANGE_INPUT_VALUE,
      value:e.target.value
    } */
    //  console.log(e.target.value);
    const action =  getInputChangeAction(e.target.value)
    store.dispatch(action)      
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleBtnClick(){
    /* const action ={
      type:ADD_TODO_ITEM,
    } */
    const action =  getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index){
    // console.log(index);
    /* const action = {
      type:DELETE_TODO_ITEM,
      index
    } */
    const action =getDeleteItemAction(index)
    store.dispatch(action)

  }
}
export default TodoList