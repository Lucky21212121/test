import React,{PureComponent} from "react";
import axios from "axios";
import {WritterWrapper,WritterTitle,WritterList,WritterItem} from "../style";
class Writter extends PureComponent {
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
                    onClick={()=>this.handleChangePage(allList,this.spinIcon)}
                    > 
                    <i  ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin ">&#xe851;</i>
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
    handleChangePage(e,spin){
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
        // console.log( spin.style.transform);
        // 拿到原始角度 originAngle:replace用来如果不是0-9的数字 那么输出为空
        let originAngle =spin.style.transform.replace(/[^0-9]/ig,'')
        // console.log(originAngle);
            if(originAngle){
                originAngle=parseInt(originAngle,10);  // 以十进制的形式转换成数字
            }else {
                originAngle = 0;  // 否则等于0
            }
        spin.style.transform='rotate(' + (originAngle+360) + 'deg)';
        
    }
 
}

export  default Writter