
import { fromJS } from "immutable";
import * as constants from "./constants"
const defaultState=fromJS ({
    topicList:[],
    articleList:[],
    recommondList:[],
    writterList:[],
    writterPage:1,
    writterTotalPage:1,
  
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
        return state.merge({
            topicList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommondList:fromJS(action.recommondList),
            writterList:fromJS(action.writterList),
            writterTotalPage:fromJS(action.writterList.length) 
         })

        default: return state 

    }
    
}