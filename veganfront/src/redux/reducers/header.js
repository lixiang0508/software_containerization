import {SEARCHFOCUS,SEARCHBLUR,LOGOBLUR,LOGOFOCUS,LOGOUT} from "../constant";
import {fromJS} from "immutable";


const initState=fromJS({focused:false,logofocused:false})



export default function headerReducer(preState=initState,action){
    const {type} =action //从action对象获取type data
    switch(type){
        case SEARCHFOCUS:
            return preState.set('focused',true)
        case SEARCHBLUR:
            return preState.set('focused',false)
        case LOGOBLUR:
            //console.log('logo失去焦点')
            return preState.set('logofocused',false)
        case LOGOFOCUS:
            //console.log('logo获得焦点')
            return preState.set('logofocused',true)
        /*
        case LOGOUT:
            return   loginReducer(fromJS({
                login: false
            }),{
                type:'change_login',
                value:false
                }
                )
*/
        default:
           return preState

    }
}