import React,{PureComponent} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {actionCreators} from "./store";
import {DetailWrapper,Header,Content} from "./style";

class Detail extends PureComponent {
    render(){
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} />               
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDeatil(this.props.match.params.id);
    }
}
const mapState =(state)=>({
title:state.getIn(['detail','title']),
content:state.getIn(['detail','content'])

});
const mapDispatch =(dispatch)=>({
    getDeatil(id){
        dispatch(actionCreators.getDeatil(id)) 

    }

})
export  default connect(mapState,mapDispatch)(withRouter(Detail))