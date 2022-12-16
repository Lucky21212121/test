import React,{Component} from "react";
import {WritterWrapper,WritterTitle,WritterList,WritterItem} from "../style";
class Writter extends Component {
    render(){
        return (
            <WritterWrapper>
                <WritterTitle>
                    <span className="recomwritter">推荐作者</span>
                    <a className="changewritter"> 
                    <i className="iconfont">&#xe851;</i>
                        换一批</a>
                </WritterTitle>
                <WritterList>
                    <WritterItem>
                        <img className="writer-pic" src="https://cdn2.jianshu.io/assets/default_avatar/8-a356878e44b45ab268a3b0bbaaadeeb7.jpg" />
                        <a className="writtername">须僧</a>
                        <p>写了22.8k字 8.9k喜欢</p>
                    </WritterItem>
                </WritterList>
            </WritterWrapper>
        )
    }
}
export  default Writter