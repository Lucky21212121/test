import React,{Component} from "react";
import store from './store/index'
import  'antd'
import { Input, Button,List} from 'antd';
import {getInputChangeAction,getBtnClickAction,getDeleteItemAction} from './store/actionCreators'
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state=store.getState()
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleStoreChange=this.handleStoreChange.bind(this)
        this.handleBtnClick=this.handleBtnClick.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render(){
        return(
            <div>
            <div style={{marginTop:'10px',marginLeft:'10px'}} >
            <Input 
            placeholder="Todo info" 
            style={{width:'300px'}}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
             />
            <Button 
            type="primary" 
            style={{marginLeft:'10px'}} 
            onClick={this.handleBtnClick}
            >提交</Button>
            </div>
            <List
            style={{width:'300px',marginLeft:'10px',marginTop:'10PX'}}
               bordered
               dataSource={this.state.list}
               renderItem={(item,index) => (
               <List.Item
               onClick={this.handleDeleteItem.bind(this,index)}>
                 {item}
               </List.Item>
                )}
                 />
            </div>
        )
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