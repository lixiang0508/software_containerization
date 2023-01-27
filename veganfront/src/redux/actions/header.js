import{SEARCHFOCUS,SEARCHBLUR,LOGOFOCUS,LOGOBLUR} from "../constant";

import axios from 'axios';


//搜索框获得焦点
export const searchFocusAction=()=>({
   type:SEARCHFOCUS
})

//搜索框失去焦点
export const searchBlurAction = ()=>(
    {type:SEARCHBLUR}
)


//logo获得焦点
export const logoFocusAction =()=>(
    {
       type:LOGOFOCUS
    }
)

//logo和searchInfo失去焦点
export const logoBlurAction =()=>(
    {
       type:LOGOBLUR
    }
)