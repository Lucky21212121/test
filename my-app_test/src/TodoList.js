import React, {Component} from "react";
import {connect} from 'react-redux'
import {getInputChange,getAddItem,getDeleteItem} from './store/actionCreators'
class TodoList extends Component {
    render(){
        const {inputValue,list,handleInputChange,handleBtnClick,handleDelete}=this.props 
        return(
            <div>
                <div>
                    <input
                    value={inputValue}
                    onChange={handleInputChange}
                    />
                    <button
                    onClick={handleBtnClick}
                    >提交</button>
                </div>
                <ul>
                    {
                       list.map((item,index)=>{
                            return <li onClick={()=>{handleDelete(index)}} key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        inputValue: state.inputValue,
        list:state.list

    }

}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputChange(e){
           const action = getInputChange(e.target.value)
           dispatch(action)
        },
        handleBtnClick(){
            const action = getAddItem()
            dispatch(action)
        },
        handleDelete(index){
            const action=getDeleteItem(index)
            dispatch(action)
        }

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)