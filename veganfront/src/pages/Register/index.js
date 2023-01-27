import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import{RegisterWrapper,RegisterBox,Pic,Input, InputWrapper,Button,InputRadio} from "./style";
import {connect} from "react-redux";
import {actionCreators} from "../Login/store";
 class Register extends PureComponent{

    render(){
        const {loginStatus} =this.props
        if(loginStatus){
            //如果已经登录 就重定向到首页
            return <Redirect to={'/'} />
        }
        return (
            <RegisterWrapper>

                <RegisterBox>
                    <Pic className="govegan" > </Pic>
                    <InputWrapper>     <span>username</span> <Input placeholder='userName' ref={input => {this.userName=input}} /></InputWrapper>
                    <InputWrapper>        <span>password</span> <Input placeholder='password' type='password' ref={input => {this.password=input}}/></InputWrapper>
                    <InputWrapper>        <span>cellphone</span> <Input placeholder='phoneNumber'  ref={input => {this.phoneNumber=input}}/></InputWrapper>
                    <InputWrapper>     <span>email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <Input placeholder='email' ref={input => {this.email=input}} /></InputWrapper>
                    <InputWrapper>        <span>age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Input placeholder='age'  ref={input => {this.age=input}}/>

                    </InputWrapper>
                    <InputWrapper>
                        <span>gender&nbsp;&nbsp;&nbsp;</span>
                        <input  type="radio" value="0" ref={input => {this.gender=input}}/> <span className="radiospan">female</span>
                        <input  type="radio" value="1" ref={input => {this.gender =input}}/> <span className="radiospan">male</span>
                       {/*<Input placeholder='gender'  ref={input => {this.gender=input}}/>*/}
                    </InputWrapper>
                    <InputWrapper>     <span>veg-type</span>
                        {/*<Input placeholder='vegan-type' ref={input => {this.vegType=input}} /> */}
                        <select ref={input => {this.vegType =input}}>
                            <option value="5">vegan</option>
                            <option value="4">fruit</option>
                            <option value="3">milk</option>
                            <option value="2">vegetarian</option>
                            <option value="1">not vegan</option>

                        </select>
                    </InputWrapper>
                    <Button onClick={()=>this.props.handleRegister(this.userName,this.password,this.phoneNumber,this.email,this.age,this.gender,this.vegType)}>Register</Button>
                </RegisterBox>


            </RegisterWrapper>
        )
    }
}
const mapState =(state)=>({
    //获取登录状态
    loginStatus:state.getIn(['login','login'])
})


const mapDispatch =(dispatch) =>(
    {
        handleRegister(userNameEle,passwordEle,phoneNumberELe,emailEle,ageEle,genderEle,vegTypeEle){
            console.log('正在注册')
            console.log('性别',genderEle.value);
            console.log('素食类型',vegTypeEle.value);

            dispatch(actionCreators.register(userNameEle.value,passwordEle.value,phoneNumberELe.value,emailEle.value,ageEle.value,genderEle.value,vegTypeEle.value))

        }
    }
)

export default connect(mapState,mapDispatch)(Register)