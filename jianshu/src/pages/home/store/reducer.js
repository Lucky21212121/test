
import { fromJS } from "immutable";
import * as constants from "./constants"
const defaultState=fromJS ({
    topicList:[],
    articleList:[],
    recommondList:[],
    articlePage:1,
   
    
  
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
        return state.merge({
            topicList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommondList:fromJS(action.recommondList),
    
         })
         case constants.ADD_HOME_LIST:
         return state.merge({
            articleList:state.get('articleList').concat(action.list),
            articlePage:action.nextPage
         })
         
         

        default: return state 

    }
    
}