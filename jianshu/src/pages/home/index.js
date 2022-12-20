import React,{Component} from "react";
import { connect } from "react-redux";
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writter from './components/Writter';
import {actionCreators} from "./store";



import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
class Home extends Component {
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/5067/5c739c1fd87cbe1352a16f575d2df32a43bea438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                <Topic/>
                <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writter/>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState=(state)=>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch)=>({
    changeHomeData(){
        const action = actionCreators.getHomeInfo()
        dispatch(action)       
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true))

        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
        

    }
})
export  default connect(mapState,mapDispatch)(Home)