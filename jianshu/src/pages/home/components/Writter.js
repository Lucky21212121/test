import React,{Component} from "react";
import axios from "axios";
import {WritterWrapper,WritterTitle,WritterList,WritterItem} from "../style";
class Writter extends Component {
    constructor(props){
        super(props);
        this.state={
           allList:null,
           listF:null,
        }
        this.handleChangePage=this.handleChangePage.bind(this)
    }
    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
        const {data,success}=res.data     
        if(success===true){
            const perPage = 5;
            const result = data.writterList.reduce((acc, curr, i) => {
              const pageNum = Math.floor(i / perPage);
              if (!acc[pageNum]) {
                acc[pageNum] = { a: pageNum + 1, array: [] };
              }
              acc[pageNum].array.push(curr);
              return acc;
            }, []);
     
            this.setState({          
                allList:result[0]
                
            })
            this.setState({           
                listF:result               
            })
        
}})
    }
    render(){
        const {allList}=this.state       
        return (
            <WritterWrapper>
                <WritterTitle>
                    <span className="recomwritter">推荐作者</span>
                    <a className="changewritter"
                    onClick={()=>this.handleChangePage(allList)}
                    > 
                    <i className="iconfont">&#xe851;</i>
                        换一批</a>
                </WritterTitle>
                <WritterList>
                    {
                     allList && Array.isArray(allList.array) && allList.array.map((item,v)=>{                          
                            return (
                                <WritterItem key={v}>
                                <div className="write">
                                <a className="writter"><img className="writter-pic" src={item.imgUrl} /></a>
                                <a className="writter-name">{item.name}</a>
                                <p className="writter-jianjie">{item.jianjie}</p>
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
    handleChangePage(e){
    
     let data=e.a+1
     let domdta=this.state.listF.filter(item=>item.a===data)
     
        if(e.a===4){
            this.setState({
                allList:this.state.listF[0]
            })
        }else{
            this.setState({
            allList:domdta[0]
        })
        }
        
    }
 
}

export  default Writter