import React,{Component} from "react";
import store from './store/index'
import  'antd'
import { Input, Button,List,Typography} from 'antd';

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
               renderItem={(item) => (
               <List.Item>
                 <Typography.Text mark></Typography.Text> {item}
               </List.Item>
                )}
                 />
            </div>
        )
    }
    handleInputChange(e){
        const action ={
            type:'change_input_value',
            value:e.target.value
         
        }
        store.dispatch(action)
        // console.log(e.target.value);
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    handleBtnClick(){
        const action ={
            type:'add_todo_item',
            

        }
        store.dispatch(action)
    }
}
export default TodoList