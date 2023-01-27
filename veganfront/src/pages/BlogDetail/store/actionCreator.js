import axios from 'axios'
import {CHANGE_BLOGDTEAIL} from "./constant";
import {PATH} from "../../../redux/constant";

const changeDetail = (result) =>(
    {
        type:CHANGE_BLOGDTEAIL,
        title:result.title,
        content:result.text,
        img:result.img,
        hits:result.hits,
        likes:result.likes,
        comments:result.comments

    }
)
export const getBlogDetail =(id)=>{
    return (dispatch)=>{
        axios.get(PATH+'blog/get/'+id).then(res =>{
            console.log('blog detail is',res.data.data);
            //console.log('current img is',res.data.data.img);
            const result = res.data.data;
            dispatch(changeDetail(result))

            }


        )
    }
}