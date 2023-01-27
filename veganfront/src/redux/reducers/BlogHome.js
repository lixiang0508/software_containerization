import {fromJS} from "immutable";
import {CHANGE_BLOGHOME_DATA} from "../constant";

const initState=fromJS({articleList:[]})


export default function blogHomeReducer(preState=initState,action){
    const {articleList,type} =action //从action对象获取type data
    switch(type){
        //处理更新首页文章列表
        case CHANGE_BLOGHOME_DATA:
            return preState.set('articleList',fromJS(articleList))

        default:
            return preState

    }
}