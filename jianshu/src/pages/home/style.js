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
    font-size:14px;
    line-height:20px;
    color:#969696;
}
`;
export const WritterList =styled.div`
width:280px;
height:295px;
`;
export const WritterItem =styled.div`
height:47px;
width:278px;
margin-top:15px;
.writer-pic {
    display:block;
    weight:48px;
    height:48px;
    border-radius:48px;
},
.writtername{
    display:block;
    color:#2f2f2f;
    font-size:14px;
}
`;
