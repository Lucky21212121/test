import React ,{Component} from "react";
import {connect} from 'react-redux';
import { CSSTransition } from "react-transition-group";
import  {actionCreators}   from './store' 
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
   
} from './style'
class Header extends Component{
    getListArea(){
        const {focused,list} =this.props
        if(focused){
            return (
               <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                       {
                        list.map((item)=>{
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>

                        })
                       }
                    </SearchInfoList>                   
                </SearchInfo>
            )
        }else {
            return null;
        }

    }
    render(){
        const {focused,handleInputFocus,handleInputBlur} =this.props 
        return (
            <HeaderWrapper>
                 <Logo />
                 <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="left">会员</NavItem>
                    <NavItem className="left">IT技术</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                    <CSSTransition
                    in={focused}
                    timeout={200}
                    classNames="slide"
                    >
                    <NavSearch
                        className={focused ? 'focused' : '' }
                        onFocus ={handleInputFocus}
                        onBlur = {handleInputBlur}
                    ></NavSearch>
                    </CSSTransition>
                    <i  className={focused ? 'focused iconfont' : 'iconfont' }>&#xe687;</i>                
                    {this.getListArea()}
                    </SearchWrapper>
                 </Nav>
                 <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writting">
                    <i className="iconfont">&#xe6eb;</i>
                        写文章</Button>
                 </Addition>
               </HeaderWrapper>
        )
    }
}


   const mapStateToProps =(state)=>{
    return {
        focused:state.getIn(['header','focused']),
        // focused:state.get('header').get('focused')
        list:state.getIn(['header','list'])
    }
   }
   const mapDispatchToProps=(dispatch)=>{   
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());        
        }
    }
   }
export default connect(mapStateToProps,mapDispatchToProps)(Header)