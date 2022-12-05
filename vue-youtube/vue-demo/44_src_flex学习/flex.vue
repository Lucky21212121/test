<template>
    <div>       
       <h1>一:flex-direction(决定主轴的方向--项目的排列方向)</h1>
       <h2>1.row(默认值):主轴水平方向,起点在左端</h2>
       <div class="aa">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
            </div>
       <h2>2.row-reserve:主轴水平方向,起点在右端</h2>
       <div class="bb">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
            </div>
       <h2>3.column:主轴垂直方向,起点在上沿</h2>
       <div class="cc">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
            </div>
       <h2>4.column-reverse:主轴垂直方向,起点在下沿</h2>
       <div class="dd">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
            </div>
       <hr>
       <h1>二:flex-wrap属性(一条轴线排不下,如何换行)</h1>
       <h2>1.nowrap(默认):不换行</h2>
       <div class="ee">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
        <div class="one">444</div>
        <div class="two">555</div>
        <div class="three">666</div>
        <div class="one">777</div>
        <div class="two">888</div>
        <div class="three">999</div>
        <div class="one">101010</div>
        <div class="two">111111</div>
        <div class="three">121212</div>
        <div class="one">131313</div>
        <div class="two">141414</div>
        <div class="three">151515</div>
        <div class="one">161616</div>
        <div class="two">171717</div>
        <div class="three">181818</div>
        <div class="one">191919</div>
        <div class="two">202020</div>
        <div class="three">212121</div>
        <div class="one">222222</div>
        <div class="two">232323</div>
        <div class="three">242424</div>
            </div>
       <h2>2.wrap:换行,第一行在上方</h2>
       <div class="ff">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
        <div class="one">444</div>
        <div class="two">555</div>
        <div class="three">666</div>
        <div class="one">777</div>
        <div class="two">888</div>
        <div class="three">999</div>
        <div class="one">101010</div>
        <div class="two">111111</div>
        <div class="three">121212</div>
        <div class="one">131313</div>
        <div class="two">141414</div>
        <div class="three">151515</div>
        <div class="one">161616</div>
        <div class="two">171717</div>
        <div class="three">181818</div>
        <div class="one">191919</div>
        <div class="two">202020</div>
        <div class="three">212121</div>
        <div class="one">222222</div>
        <div class="two">232323</div>
        <div class="three">242424</div>
            </div>
       <h2>3.wrap-reverse:换行,第一行在下方</h2>
       <div class="gg">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
        <div class="one">444</div>
        <div class="two">555</div>
        <div class="three">666</div>
        <div class="one">777</div>
        <div class="two">888</div>
        <div class="three">999</div>
        <div class="one">101010</div>
        <div class="two">111111</div>
        <div class="three">121212</div>
        <div class="one">131313</div>
        <div class="two">141414</div>
        <div class="three">151515</div>
        <div class="one">161616</div>
        <div class="two">171717</div>
        <div class="three">181818</div>
        <div class="one">191919</div>
        <div class="two">202020</div>
        <div class="three">212121</div>
        <div class="one">222222</div>
        <div class="two">232323</div>
        <div class="three">242424</div>
            </div>
       <hr>
       <h1>三:flex-flow属性(flex-direction属性和flex-wrap属性的简写形式),默认值是:row nowrap</h1>
       <h2>1.row-reserve和wrap:起点右侧,换行第一行在上方</h2>
       <div class="hh">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
        <div class="one">444</div>
        <div class="two">555</div>
        <div class="three">666</div>
        <div class="one">777</div>
        <div class="two">888</div>
        <div class="three">999</div>
        <div class="one">101010</div>
        <div class="two">111111</div>
        <div class="three">121212</div>
        <div class="one">131313</div>
        <div class="two">141414</div>
        <div class="three">151515</div>
        <div class="one">161616</div>
        <div class="two">171717</div>
        <div class="three">181818</div>
        <div class="one">191919</div>
        <div class="two">202020</div>
        <div class="three">212121</div>
        <div class="one">222222</div>
        <div class="two">232323</div>
        <div class="three">242424</div>
            </div>
        <h2>1.row-reserve和wrap-reverse:起点左侧,换行第一行在下方</h2>
        <div class="ii">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
        <div class="one">444</div>
        <div class="two">555</div>
        <div class="three">666</div>
        <div class="one">777</div>
        <div class="two">888</div>
        <div class="three">999</div>
        <div class="one">101010</div>
        <div class="two">111111</div>
        <div class="three">121212</div>
        <div class="one">131313</div>
        <div class="two">141414</div>
        <div class="three">151515</div>
        <div class="one">161616</div>
        <div class="two">171717</div>
        <div class="three">181818</div>
        <div class="one">191919</div>
        <div class="two">202020</div>
        <div class="three">212121</div>
        <div class="one">222222</div>
        <div class="two">232323</div>
        <div class="three">242424</div>
            </div>
            <hr>
        <h1>四:justify-content属性(项目在主轴上的对齐方式)</h1>  
        <h2>1.flex-start(默认值):左对齐</h2>  
        <div class="jj">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
            </div>
        <h2>2.flex-end:右对齐</h2>  
        <div class="kk">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
            </div>
        <h2>3.center:居中</h2>  
        <div class="ll">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
            </div>
        <h2>4.space-between:两端对齐,项目之间的间隔都相等</h2>  
        <div class="mm">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
        <div class="one">444</div>
        <div class="two">555</div>
       
            </div>
        <h2>5.space-around:每个项目两侧的间隔都相等;所以,项目之间的间隔比项目与边框的间隔大一倍</h2>  
        <div class="nn">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
            </div>
        <h2>6.space-evenly:项目与项目之间的间隔相等</h2>  
        <div class="oo">
        <div class="one">111</div>
        <div class="two">222</div>
        <div class="three">333</div>
            </div>
            <hr>
        <h1>五:align-items属性(项目在交叉轴上如何对齐)</h1>    
        <h2>1.flex-start:交叉轴的起点对齐</h2>
        <div class="pp">
            <div class="four"></div>
            <div class="five"></div>
            <div class="six"></div>
        </div>
        <h2>2.flex-end:交叉轴的终点对齐</h2>
        <div class="qq">
            <div class="four"></div>
            <div class="five"></div>
            <div class="six"></div>
        </div>
        <h2>3.center:交叉轴的中点对齐</h2>
        <div class="rr">
            <div class="four"></div>
            <div class="five"></div>
            <div class="six"></div>
        </div>
        <h2>4.baseline:项目的第一行文字的基线对齐</h2>
        <div class="ss">
            <div class="four">4444</div>
            <div class="five">5555</div>
            <div class="six">6666</div>
        </div>
        <h2>5.stretch(默认值):如果项目未设置高度或设为auto,将占满整个容器的高度</h2>
        <div class="tt">
            <div class="noHeight"></div>
            <div class="noHeight"></div>
            <div class="noHeight"></div>
        </div>
        <hr>
        <h1>六:align-content属性(多根轴线的对齐方式,如果项目只有一根轴线,该属性不起作用)</h1>
        <h2>1.flex-start:与交叉轴的起点对齐</h2>
        <!-- <div class="uu">
             <div class="one">111</div>
             <div class="two">222</div>
             <div class="three">333</div>
             <div class="one">444</div>
             <div class="two">555</div>
             <div class="three">666</div>
             <div class="one">777</div>
             <div class="two">888</div>
             <div class="three">999</div>
             <div class="one">101010</div>
             <div class="two">111111</div>
             <div class="three">121212</div>            
        </div> -->
        <h2>2.flex-end:与交叉轴的终点对齐</h2>
        <!-- <div class="vv">
             <div class="one">111</div>
             <div class="two">222</div>
             <div class="three">333</div>
             <div class="one">444</div>
             <div class="two">555</div>
             <div class="three">666</div>
             <div class="one">777</div>
             <div class="two">888</div>
             <div class="three">999</div>
             <div class="one">101010</div>
             <div class="two">111111</div>
             <div class="three">121212</div>            
        </div> -->
        <h2>3.center:与交叉轴的中点对齐</h2>
        <h2>4.space-between:与交叉轴两端对齐,轴线之间的间隔平均分布</h2>
        <h2>5.space-around:每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</h2>
        <h2>6.stretch(默认值):轴线占满整个交叉轴</h2>
        <img src="./images/align-content.png" alt="">
        <hr>
        <hr>
        <h1>flex实例</h1>
        <h2>1.骰子的布局</h2>
        <h3>单项目</h3>
        <h4>(1).flex布局默认首行左对齐,所以一行代码就可以</h4>
        <div class="box firstBoxOne">
            <span class="item"></span>
        </div>
        <h4>(2).居中对齐</h4>
        <div class="box firstBoxTwo">
            <span class="item"></span>
        </div>
        <h4>(3).右对齐</h4>
        <div class="box firstBoxThree">
            <span class="item"></span>
        </div>
        <h4>(4).交叉轴的对齐方式:左中对齐</h4>
        <div class="box firstBoxFour">
            <span class="item"></span>
        </div>
        <h4>(5).交叉轴的对齐方式:中间对齐</h4>
        <div class="box firstBoxFive">
            <span class="item"></span>
        </div>
        <h4>(6).交叉轴的对齐方式:下边中间对齐</h4>
        <div class="box firstBoxSix">
            <span class="item"></span>
        </div>
        <h4>(7).交叉轴的对齐方式:右下角对齐</h4>
        <div class="box firstBoxSeven">
            <span class="item"></span>
        </div>
        <hr>
        <h3>双项目</h3>
        <div class="box SecondBoxone">
            <span class="item"></span>
            <span class="item"></span>
        </div>
        <br>
        <div class="box SecondBoxTwo">
            <span class="item"></span>
            <span class="item"></span>
        </div>
        <br>
        <div class="box SecondBoxThree">
            <span class="item"></span>
            <span class="item"></span>
        </div>
        <br>
        <div class="box SecondBoxFour">
            <span class="item"></span>
            <span class="item"></span>
        </div>
        <br>
        <h2>align-self 属性允许单个项目有与其他项目不一样的对齐方式,可覆盖align-items属性;默认值为auto,表示继承父元素的align-items属性,如果没有父元素,则等同于stretch</h2>
        <div class="box SecondBoxFive">
            <span class="item"></span>
            <span class="item secondItemone"></span>
        </div>
        <br>
        <div class="box SecondBoxSix">
            <span class="item"></span>
            <span class="item secondItemTwo"></span>
        </div>
        <hr>

        <h3>三项目</h3>
        <div class="box ThirdBoxOne">
            <span class="item"></span>
            <span class="item secondItemThree"></span>
            <span class="item ThirdItemOne"></span>
        </div>
        <hr>

        <h3>四项目</h3>
        <div class="box FourthBoxOne">
            <span class="item "></span>
            <span class="item "></span>
            <span class="item "></span>
            <span class="item "></span>
        </div>
        <br>
        <h2>flex-basis属性定义了在分配多余空间之前,项目占据的主轴空间(main size).浏览器根据这个属性,计算主轴是否有多余空间.它的默认值为auto,即项目的本来大小</h2>
        <div class="box FourthBoxTwo">
            <div class="column">
                <span class="item"></span>
                <span class="item"></span>
            </div>
            <div class="column">
                <span class="item"></span>
                <span class="item"></span>
            </div>
        </div>
        <hr>

        <h3>六项目</h3>
        <div class="box SixthBoxOne">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>
        <br>
        <div class="box SixthBoxTwo">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>
        <br>
        <div class="box SixthBoxThree">
            <div class="row FirstRow" style="background-color:blue;">
               <span class="item"></span>
               <span class="item"></span>
               <span class="item"></span>
            </div>
            <div class="row secondRow " style="background-color:pink">
                <span class="item"></span>
            </div>
            <div class="row ThirdRow" style="background-color:orange">
                <span class="item"></span>
                <span class="item"></span>
            </div>

        </div>
        <hr>
        <h3>九项目</h3>
        <div class="box ninthBox">
           <span class="item"></span>
           <span class="item"></span>
           <span class="item"></span>
           <span class="item"></span>
           <span class="item"></span>
           <span class="item"></span>
           <span class="item"></span>
           <span class="item"></span>
           <span class="item"></span>        
        </div>
        <hr>
        <h2>2.网格布局</h2>
        <h3>基本网格布局:最简单的网格布局就是平均分布</h3>
        <div class="Grid">
            <div class="Grid-cell">
                <span class="item1">1/2</span>
                <span class="item1">1/2</span>
            </div>
            <div class="Grid-cell">
                <span class="item1">1/2</span>
                <span class="item1">1/2</span>
            </div>
            
        </div>
        <br>
        <div class="Grid">
            <div class="Grid-cell">
                <span class="item1">1/3</span>
                <span class="item1">1/3</span>
            </div>
            <div class="Grid-cell">
                <span class="item1">1/3</span>
                <span class="item1">1/3</span>
            </div>
            <div class="Grid-cell">
                <span class="item1">1/3</span>
                <span class="item1">1/3</span>
            </div>
        </div>
        <br>
        <div class="Grid">
            <div class="Grid-cell">
                <span class="item1">1/4</span>
                <span class="item1">1/4</span>
            </div>
            <div class="Grid-cell">
                <span class="item1">1/4</span>
                <span class="item1">1/4</span>
            </div>
            <div class="Grid-cell">
                <span class="item1">1/4</span>
                <span class="item1">1/4</span>
            </div>
            <div class="Grid-cell">
                <span class="item1">1/4</span>
                <span class="item1">1/4</span>
            </div>
            
        </div>





    </div>
 
 
 </template>
 
 <script>

 export default{
     name:'flex',   
    }
   
 </script>
 
 <style lang="less" >
//  #region
 .one,
 .two,
 .three {
    width: 100px;
    height: 100px;
 }
 .one{
    background-color: skyblue;
 }
 .two{
    background-color:greenyellow;
 }
 .three{
    background-color: orange;
 }
 .four,
 .five,
 .six{
   
    width: 100px;
 }
 .four{
    height: 100px;
    background-color: aquamarine;
    padding-top:15px;
 }
 .five{
    height: 150px;
    background-color:antiquewhite;
   padding-top: 10px;
 }
 .six{
    height: 50px;
    background-color:skyblue;
    padding-top:5px;
 }
 .noHeight{
    background-color: blue;
    width: 100px;

 }
//  #endregion
// 一 flex-direction
// #region
 .aa {
    display: flex;
    flex-direction: row;
 }
 .bb{
    display: flex;
    flex-direction: row-reverse;
 }
 .cc{
    display:flex;
    flex-direction:column;
 }
 .dd{
    display: flex;
    flex-direction: column-reverse;
 }
//  #endregion
 

// 二 flex-wrap
// #region
.ee{
    display: flex;
    flex-wrap: nowrap;
 }
 .ff{
    display: flex;
    flex-wrap:wrap;
 }
 .gg{
    display: flex;
    flex-wrap:wrap-reverse;
 }
//  #endregion
 
//  三 flex-flow
// #region
.hh{
    display:flex;
    flex-flow:row-reverse wrap;
}
.ii{
    display:flex;
    flex-flow:row-reverse wrap-reverse;
}
//  #endregion
 
//  四 justify-content
// #region
.jj{
    display:flex;
    justify-content: flex-start;
}
.kk{
    display: flex;
    justify-content:flex-end;
}
.ll{
    display:flex;
    justify-content:center;
}
 .mm{
    display: flex;
    justify-content: space-between;
 }
 .nn{
    display:flex;
    justify-content:space-around;
 }
 .oo{
    display: flex;
    justify-content: space-evenly;
 }
//  #endregion
//  五 align-items
// #region
.pp{
    display: flex;
    align-items:flex-start;
}
.qq{
    display:flex;
    align-items:flex-end;
}
.rr{
    display: flex;
    align-items:center;
}
.ss{
    display: flex;
    align-items:baseline;
}
.tt{
    height: 250px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
}

//  #endregion
 
//  六 align-content
// #region
.uu{
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 500px;
}
.vv{
    display: flex;
    align-content: flex-end;
    flex-wrap: wrap;
    width: 500px;
}
// #endregion

//  实例
// 单项目
// #region
.box{
    width: 100px;
    height: 100px;
    background-color: #f1f1f1;
    border-radius: 10px;
}
.item{
    display: inline-block;
    height: 30px;
    width: 30px;
    border-radius: 20px;
    background-color: black;
}
.firstBoxOne{   
    display:flex;
}
.firstBoxTwo{
    display:flex;
    justify-content:center;
}
.firstBoxThree{
    display:flex;
    justify-content: flex-end;
}
.firstBoxFour{
    display: flex;
    align-items: center;
}
.firstBoxFive{
    display: flex;
    justify-content: center;
    align-items: center;
}
.firstBoxSix{
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.firstBoxSeven{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
// #endregion
// 双项目
// #region
.SecondBoxone{
    display: flex;
    justify-content:space-between;
}
.SecondBoxTwo{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.SecondBoxThree{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.SecondBoxFour{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}
.SecondBoxFive{
    display:flex;
}
.secondItemone{
    align-self: center;
}
.SecondBoxSix{
    display:flex;
    justify-content: space-between;
}
.secondItemTwo{
    align-self: flex-end;
}
// #endregion

// 三项目
// #region
.ThirdBoxOne{
    display:flex;
    justify-content: space-between;
}
.secondItemThree{
    align-self: center;
}
.ThirdItemOne{
    align-self: flex-end;
}
// #endregion
// 四项目
// #region
.FourthBoxOne{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: space-between;
}
.FourthBoxTwo{
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}
.column{
    background-color: pink;
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
}
// #endregion

// 六项目
// #region
.SixthBoxOne{
    display:flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-evenly;
}
.SixthBoxTwo{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
}
.SixthBoxThree{
    display: flex;
    flex-wrap: wrap;

   
}
.row{
    flex-basis: 100%; // 要么用这个
    display: flex;
}
.FirstRow{
    justify-content: space-evenly;
}
.secondRow{
    justify-content: center;
}
.ThirdRow{
    justify-content: space-between;
}
// #endregion
// 九项目
// #region
.ninthBox{
    display: flex;
    flex-wrap: wrap;
}
// #endregion

.Grid{
display: flex;
width: 1200px;
background-color: bisque;
}
.Grid-cell {
  flex: 1;
}
.item1{
    display: inline-block;
    background-color: aquamarine;
    height: 50px;
    width: 100px;
    text-align: center;
}

</style> 