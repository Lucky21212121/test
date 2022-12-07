import  React, {Component} from 'react'

import {connect} from 'react-redux'
const TodoList = (props)=>{
    const {inputValue,list,changeInputValue,handleClick,handleDelete} = props
        return (
            <div>
            <div>
                <input 
                value={inputValue}
                onChange={changeInputValue}
                />
                <button
                onClick={handleClick}                
                >提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return <li 
                        key={index}
                        onClick={()=>{handleDelete(index)}}
                        >{item}</li>
                    })

                }
            </ul>
           </div>
        )
}
/* class TodoList extends Component {
    render (){
        const {inputValue,list,changeInputValue,handleClick,handleDelete} = this.props
        return (
            <div>
            <div>
                <input 
                value={inputValue}
                onChange={changeInputValue}
                />
                <button
                onClick={handleClick}                
                >提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return <li 
                        key={index}
                        onClick={()=>{handleDelete(index)}}
                        >{item}</li>
                    })

                }
            </ul>
           </div>
        )
    }   
} */
const mapStateToProps =(state)=>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }    
}
// store.dispatch
const mapDispatchToProps=(dispatch)=>{
    return {
        changeInputValue(e){
            const action = {
                type:'change_input_value',
                value:e.target.value
            }
            dispatch(action)
        },
        handleClick(){
            const action ={
                type:'add_item'
            }
            dispatch(action)
        },
        handleDelete(index){
            const action = {
                type:'delete_item',
                index
            }
            dispatch(action)

        }
    }

}
// connect 是连接;TodoList和store作连接;怎么作连接,有一个映射关系就在mapStateToProps里面:怎么映射,state指的是store里面的数据,store里面的inputValue映射到组件的props里面,props里面的inputValue上     
// 
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)