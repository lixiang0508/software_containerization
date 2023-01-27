import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {LoginWrapper,LoginBox,Input,Button,InputWrapper} from "./style";
import {connect} from "react-redux";
import {actionCreators} from "./store"


 class Login extends PureComponent{

    render(){
        const {loginStatus} =this.props
        if(loginStatus){
            //如果已经登录 就重定向到首页
            return <Redirect to={'/'} />
        }
        return (
            <div>
                <LoginWrapper>

                    <LoginBox>
                        <img className="govegan" src={`../../../images/login-pic.png`}/>
             <InputWrapper>     <span>username</span> <Input placeholder='userName' ref={input => {this.userName=input}} /></InputWrapper>
              <InputWrapper>        <span>password</span> <Input placeholder='password' type='password' ref={input => {this.password=input}}/></InputWrapper>
                        <InputWrapper>        <span>cellphone</span> <Input placeholder='phoneNumber' type='password' ref={input => {this.phoneNumber=input}}/></InputWrapper>


                        <Button onClick={()=>this.props.login(this.userName,this.password,this.phoneNumber)}>Login</Button>
                    </LoginBox>


                </LoginWrapper>

            </div>
        )
    }
}

const mapState =(state)=>({
  //获取登录状态
  loginStatus:state.getIn(['login','login'])
})
const mapDispatch =(dispatch) =>(
    {
        login(userNameEle,passwordEle,phoneNumberELe){
            console.log('userName',userNameEle.value)
            console.log('pwd',passwordEle.value)
            dispatch(actionCreators.login(userNameEle.value,passwordEle.value,phoneNumberELe.value))

        }
    }
)

export default connect(mapState,mapDispatch)(Login)