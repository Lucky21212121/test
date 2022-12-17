import React,{Component} from "react";
import {connect} from "react-redux";
import {WritterWrapper,WritterTitle,WritterList,WritterItem} from "../style";
class Writter extends Component {
    render(){
        const {list} = this.props 
        return (
            <WritterWrapper>
                <WritterTitle>
                    <span className="recomwritter">推荐作者</span>
                    <a className="changewritter"> 
                    <i className="iconfont">&#xe851;</i>
                        换一批</a>
                </WritterTitle>
                <WritterList>
                    {
                        list.map((item)=>{
                            return (
                                <WritterItem key={item.get('id')}>
                                <div className="write">
                                <a className="writter"><img className="writter-pic" src={item.get('imgUrl')} /></a>
                                <a className="writter-name">{item.get('name')}</a>
                                <p className="writter-jianjie">{item.get('jianjie')}</p>
                                </div>
                                <a className="writter-guanzhu" >
                                <i className="iconfont">&#xeaf3;</i>
                                 关注</a>
                              </WritterItem>
                            )
                        })
                    }
                </WritterList>
                <a className="chakanquanbu">查看全部<i className="iconfont">&#xe62d;</i></a>
            </WritterWrapper>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(['home','writterList'])

})
export  default connect(mapState,null)(Writter)