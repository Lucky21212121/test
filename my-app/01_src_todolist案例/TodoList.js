
import React, {Component,Fragment} from "react";
import TodoItem from './TodoItem'
// import Test from "./Test";
import axios from 'axios'
import './style.css'
class TodoList extends Component{

    constructor(props){
        super(props);
        // 当组件的state或者props发生改变的时候,render函数就会重新执行
        this.state= {
            inputValue:'',
            list:[],

        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick=this.handleBtnClick.bind(this)
        this.handleItemDelete=this.handleItemDelete.bind(this)
    }


    render(){
        // console.log('parent render');
        return(
                <Fragment>
                    <div>
                        <label htmlFor="insertArea">输入内容</label>
                     <input 
                     id="insertArea"
                     className="input"
                     value={this.state.inputValue}
                     onChange={this.handleInputChange}
                     ref={(input)=>{this.input=input}}
                      /> 
                     <button 
                     onClick={this.handleBtnClick} 
                     >
                        提交</button>            
                    </div>
                  <ul ref={(ul)=>{this.ul=ul}}>
                   {this.getTodoItem()}
                   </ul>
                   {/* <Test content={this.state.inputValue}/> */}
                </Fragment>
                )
    }
    componentDidMount(){
        axios.get('/api/todolist')
        .then(()=>{alert('succ')})
        .catch(()=>{alert('error')})

    }


    



    getTodoItem(){
       return this.state.list.map((item,index) => {
            return (
               <div key={item}> 
                <TodoItem                               
                content={item} 
                index={index}
                deleteItem={this.handleItemDelete}
                />
                {/* <li 
                   key={index} 
                   onClick={this.handleItemDelete.bind(this,index)}
                    dangerouslySetInnerHTML={{__html: item}}
                    >                           
                   </li> */} 
                </div>                        
            )

        })
    }



    handleInputChange(e){
        // console.log(e.target);
        // const value =e.target.value
        const value =this.input.value
        this.setState(()=>({inputValue:value}))

        /*  this.setState({
            inputValue:e.target.value
        })  */
       
        // console.log(e.target.value);

    }
    handleBtnClick(){
        // console.log(this);

        this.setState((prevState) => ({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }),()=>{
            console.log(this.ul.querySelectorAll('div').length);
        }
        )
        

        /* this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        }) */

    }
    handleItemDelete(index){
        // console.log(index);

        this.setState((prevState)=>{
            const list = [...prevState.list,]
            list.splice(index,1)
            return {list}
        })


        /* const list = [...this.state.list];      
        list.splice(index,1);
        this.setState({
            list:list
        }) */


    }
}





export default TodoList