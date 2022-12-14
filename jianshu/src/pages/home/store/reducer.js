
import { fromJS } from 'immutable';

const defaultState=fromJS ({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:'https://img2.woyaogexing.com/2022/12/12/dac2dbda3e5fef12d7c9837cc67a79c1.jpeg'
    },{
        id:2,
        title:'手绘',
        imgUrl:'https://img2.woyaogexing.com/2022/12/12/55a1a23ea40221f3e17bbb0915ed852f.jpeg'
    },
    {
        id:3,
        title:'简书电影',
        imgUrl:'https://img2.woyaogexing.com/2022/12/12/f3541ecba47a87345b64d3005f719121.jpeg'
    },
    {
        id:4,
        title:'读书',
        imgUrl:'https://img2.woyaogexing.com/2022/12/12/6c36be5ada53056b33d54fe54d449097.jpeg'
    },
    {
        id:5,
        title:'摄影',
        imgUrl:'https://img2.woyaogexing.com/2022/12/12/e1b3091bab5b69d9296a2357c69513a8.jpeg'
    },
    {
        id:6,
        title:'旅行-在路上',
        imgUrl:'https://img2.woyaogexing.com/2022/12/12/088563561ca012591fb47e51f0532b95.jpeg'
    },
    {
        id:7,
        title:'历史',
        imgUrl:'https://img2.woyaogexing.com/2022/12/12/f3a64bcff4c653c742019b78ef24a2a3.jpg'
    },
],
articleList:[{
    id:1,
    title:'沈从文与张兆和',
    desc:'有一篇文章是专门写他们俩人的故事的，说真的分析的实在透彻了：大部分夫妻几乎都是这样的！相互的嫌弃又还仍旧是在一起。在一起再多年了都不是那么.....',
    imgUrl:'https://img2.woyaogexing.com/2022/12/12/bafe0fa687274912753b1d5263f3c3f9.jpeg'
},
{
    id:2,
    title:'沈从文与张兆和',
    desc:'有一篇文章是专门写他们俩人的故事的，说真的分析的实在透彻了：大部分夫妻几乎都是这样的！相互的嫌弃又还仍旧是在一起。在一起再多年了都不是那么.....',
    imgUrl:'https://img2.woyaogexing.com/2022/12/12/bafe0fa687274912753b1d5263f3c3f9.jpeg'
},
{
    id:3,
    title:'沈从文与张兆和',
    desc:'有一篇文章是专门写他们俩人的故事的，说真的分析的实在透彻了：大部分夫妻几乎都是这样的！相互的嫌弃又还仍旧是在一起。在一起再多年了都不是那么.....',
    imgUrl:'https://img2.woyaogexing.com/2022/12/12/bafe0fa687274912753b1d5263f3c3f9.jpeg'
},
{
    id:4,
    title:'沈从文与张兆和',
    desc:'有一篇文章是专门写他们俩人的故事的，说真的分析的实在透彻了：大部分夫妻几乎都是这样的！相互的嫌弃又还仍旧是在一起。在一起再多年了都不是那么.....',
    imgUrl:'https://img2.woyaogexing.com/2022/12/12/bafe0fa687274912753b1d5263f3c3f9.jpeg'
},],
recommondList:[{
    id:1,
    imgUrl:'https://tenfei04.cfp.cn/creative/vcg/veer/1600water/veer-300868548.jpg'
}]
})

export default (state=defaultState,action)=>{
    switch(action.type){
        default: return state 

    }
    
}