import axios from 'axios';
import * as constants from './constants'
import setAuthToken from "../../../utils/AuthToken";
import {PATH} from "../../../redux/constant";
const changeLogin = ()=>({
    type:constants.CHANGE_LOGIN,
        value:true
})

export const logOutAction =() =>({
    type:constants.LOGOUT,
    value:false
})
export const registerAction =()=>({
    type:constants.REGISTER
})
//注册
export const register =(userName,password,phoneNumber,email,age,gender,vegType) =>{
    return (dispatch)=>{
        axios.post(PATH+`auth/register`,{
            userName:userName,
            pwd:password,
            phoneNumber:phoneNumber,
            email:email,
            age:age,
            gender:gender,
            vegType:vegType
        }).then(
            res=>{
                console.log('注册返回值',res.data.err);
                let errcode= res.data.err;

                if(errcode===0){
                    //成功
                    alert('Register success')

                    dispatch(registerAction())
                }else{
                    alert('Register fail')
                }
            },err=>{
                console.log('注册出错',err)
            }
        )

    }
}

//登录
export const login = (userName,password,phoneNumber) =>{
    return (dispatch) =>{
        axios.post(PATH+`auth/login`,{
            userName:userName,
            password:password,
            phoneNumber:phoneNumber
        }).then(
            res=>{
                console.log('状态码是',res.data.err);
                console.log('返回值是',res.data);
                let errcode= res.data.err;
                if(errcode===0){
                    //成功
                    alert('Login success')
                    const token = res.data.msg;
                    console.log('token is',token);
                    localStorage.setItem('user_token',token);//存储token
                    setAuthToken(token)
                    dispatch(changeLogin())
                }else{
                   alert('Login fail')
                }
            }
        )
    }
}