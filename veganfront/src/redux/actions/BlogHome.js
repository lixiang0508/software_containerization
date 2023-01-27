//博客首页部分的action creator
import axios from 'axios';
import { fromJS } from 'immutable';
import {CHANGE_BLOGHOME_DATA, PATH} from "../constant"

const changeData = (result) =>({
    type:CHANGE_BLOGHOME_DATA,
        articleList:result.data
});


export const getHomeInfo = () => {
    console.log("开始请求后端");
    return (dispatch) => {
        
        axios.get(PATH+`blog/all`).then(
            res => {
            console.log(res);
            const result = res.data;
            dispatch(changeData(result));
        },
            error=>{
                console.log(error);
            }
            );
    }
}