import React,{Component} from "react";

class Test extends Component {
//    当父组件的render函数被运行时,它的子组件的render都将被重新运行
    render(){
        console.log('Testd render');
        return <div>{this.props.content}</div>
    }
}
export default Test