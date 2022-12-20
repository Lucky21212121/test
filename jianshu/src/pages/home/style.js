import styled from 'styled-components'
export const HomeWrapper = styled.div`
overflow:hidden;
width:960px;
margin:0 auto;
`;
export const HomeLeft = styled.div`
float:left;
margin-left:15px;
padding-top:30px;
width:625px;
.banner-img {
    width:625px;
    height:270px;
}
`;
export const HomeRight = styled.div`
width:280px;
float:right;
`;
export const TopicWrapper = styled.div`
overflow:hidden;
padding:20px 0 10px 0;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;

`;
export const TopicItem = styled.div`
float:left;
height:32px;
line-height:32px;
margin-left:18px;
margin-bottom:18px;
padding-right:10px;
background:#f7f7f7;
font-size:14px;
color:#000;
border: 1px solid #dcdcdc;
border-radius:4px;
.topoc-pic {
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
}
`;
export const ListItem = styled.div`
overflow:hidden;
padding: 20px 0;
border-bottom :1px solid #dcdcdc;
.list-pic{
    display:block;
    float:right;
    width:125px;
    height:100px;
    border-radius:10px
}   
`;
export const ListInfo = styled.div`
width:500px;
float:left;
.title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
}
.desc{
    font-size:13px;
    line-height:24px;
    color:#999;
}
`;
export const RecommendWrapper =styled.div`
margin:30px 0;
width:280px;

`;
export const RecommendItem =styled.div`
width:280px;
height:50px;
background:url(${(props)=> props.imgUrl});
bacKground-size:contain;
`;

export const WritterWrapper =styled.div`
width:280px;
height:300px;
.chakanquanbu{
    display:block;
    margin-top:10px;
    padding: 7px 7px 7px 12px;
    font-size:13px;
    text-align:center;
    color:#787878;
    background-color:#f7f7f7;
    border:1px solid #dcdcdc;
    border-radius:4px;
    cursor:pointer;
    

}
`;
export const WritterTitle = styled.div`
height:20px;
width:278px;
.recomwritter {
    float:left;
    font-size:14px;
    line-height:20px;
    color:#969696;
}
.changewritter{
    display:block;
    float:right;
    font-size:13px;
    line-height:20px;
    color:#969696;
    cursor:pointer;
}
.spin {
    display:block; // 第一要是block 
    float:left; // 第二可以浮动在左边
    font-size:12px;
    transition:all .2s ease-in; // 动画效果第一步
    // transform:rotate(0deg);  0的意思跟不写是一样的 动画效果第二步
    transform-orgin:center center; // 动画效果第三步
}
`;
export const WritterList =styled.ul`
width:280px;
height:295px;
`;
export const WritterItem =styled.li`
display:flex;
justify-content:space-between;
margin-top:15px;
width:278px;
height:47px;
.write{
    height:48px;
    width:200px;
}
.writter{
    display:block;
    float:left;
    width:48px;
    height:48px;
    cursor:pointer; 
}
.writter-pic{
    width:100%;
    height:100%;
    border-radius:50%;   
}
.writter-name{
    margin-left:10px;
    font-size: 14px;
}
.writter-jianjie{
    margin-left:60px;
    margin-top:10px;
    height:20px;
    line-height:20px;
    font-size: 12px;
    color: #969696;
}
.writter-guanzhu{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
}
`;
export const LoadMore =styled.div`
width:100%;
height:40px;
margin:30px 0 ;
line-height:40px;
background:#a5a5a5;
text-align:center;
border-radius:20px;
color:#fff;
cursor:pointer;
`;
export const BackTop =styled.div`
position:fixed;
right:100px;
bottom:100px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #ccc; 
font-size:14px;

`;
