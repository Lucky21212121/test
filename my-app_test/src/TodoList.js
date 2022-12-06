import React,{Component} from "react";
import store from './store/index'
import TodoListUI from "./TodoListUI";
import axios from "axios";

import {getInputChangeAction,getBtnClickAction,getDeleteItemAction,initListAction} from './store/actionCreators'
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state=store.getState()
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleStoreChange=this.handleStoreChange.bind(this)
        this.handleBtnClick=this.handleBtnClick.bind(this)
        this.handleDeleteItem=this.handleDeleteItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render(){
        return(
            <TodoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleDeleteItem={this.handleDeleteItem}
            />
        )
    }
    componentDidMount(){
        axios.get('http://localhost:10086').then((res)=>{
            const data = res.data
            // console.log(data);
            const action = initListAction(data)
            store.dispatch(action)

        })
    }
    handleInputChange(e){
        /* const action ={
            type:CHANGE_INPUT_VALUE,
            value:e.target.value         
        } */
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
        // console.log(e.target.value);
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    handleBtnClick(){
        /* const action ={
            type:ADD_TODO_ITEM,            
        } */
        const action = getBtnClickAction()
        store.dispatch(action)
    }
    handleDeleteItem(index){
       /*  const action ={
            type:DELETE_TODO_ITEM,
            index
        } */
        const action = getDeleteItemAction(index)
        store.dispatch(action)

    }
}
export default TodoList