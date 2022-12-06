import React, {Component} from "react";
import  'antd'
import { Input, Button,List} from 'antd';
const TodoListUI=(props)=>{
    return (
           <div>
            <div style={{marginTop:'10px',marginLeft:'10px'}} >
            <Input 
            placeholder="Todo info" 
            style={{width:'300px'}}
            value={props.inputValue}
            onChange={props.handleInputChange}
             />
            <Button 
            type="primary" 
            style={{marginLeft:'10px'}} 
            onClick={props.handleBtnClick}
            >提交</Button>
            </div>
            <List
            style={{width:'300px',marginLeft:'10px',marginTop:'10PX'}}
               bordered
               dataSource={props.list}
               renderItem={(item,index) => (
               <List.Item
               onClick={(index)=>{props.handleDeleteItem(index)}}>
                 {item}
               </List.Item>
                )}
                 />
            </div>
    )

}
export default TodoListUI