import React,{Component} from "react";
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !==this.props.content){
            return true
        }else{
            return false 
        }
        
    }
    render(){
        console.log('child render');
      const {content,test} = this.props
    //   JSX -> createElement -> 虚拟DOM(JS对象) -> 真实的DOM
    // return <div><span>item</span></div>
    // return React.createElement('div',{},React.createElement('span',{},'item'))
        return (
            <div onClick={this.handleClick}>
                {test}-{content}
                </div>
        )
    }
    handleClick(){
        const {deleteItem,index} = this.props
        deleteItem(index) 
        // this.props.deleteItem(this.props.index)
       
    }



}
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

TodoItem.defaultProps={
    test:'hello world'
}
export default TodoItem