import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {AccountManageWrapper} from "./style"
import {Button, Input, InputWrapper} from "../../../Register/style";
import axios from "axios";
import {PATH} from "../../../../redux/constant"



class AccountManage extends  PureComponent{
    state={customer:{}}
    componentDidMount() {
       this.getData()

    }
    changeAccount=(userName,password,phoneNumber,email,age,gender,vegType)=>{
        console.log(`请求参数是`,userName,password,phoneNumber,email,age,gender,vegType)
        axios.post(PATH+'customer/update',{
            headers:{
                'token':localStorage.getItem('user_token')
            },
            userName:userName,
            pwd:password,
            phoneNumber:phoneNumber,
            email:email,
            age:age,
            gender:gender,
            vegType:vegType

        }).then(
            res=>{
                if(res.data.err!==0){
                    console.log(res.data)
                    alert(`Fail to change personal account`)
                }else{
                    alert(`Change personal account success`)
                }
            }
        )

    }
    getData(){
        axios.get(PATH+'customer',{
            headers:{
                'token':localStorage.getItem('user_token')
            }}
            ).then(
                res=>{
                    if(res.data.err!==0){
                        console.log(`返回个人信息错误`)
                    }else{
                        this.setState({customer:res.data.data})
                    }
                }

        )

    }

    render(){
        const{customer} = this.state
        return(
            <AccountManageWrapper>


                    <InputWrapper>     <span>username</span> <Input placeholder={customer.userName} ref={input => {this.userName=input}}  /></InputWrapper>
                    <InputWrapper>        <span>password</span> <Input type='password' ref={input => {this.password=input}}/></InputWrapper>
                    <InputWrapper>        <span>cellphone</span> <Input placeholder={customer.phoneNumber} ref={input => {this.phoneNumber=input}} /></InputWrapper>
                    <InputWrapper>     <span>email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <Input placeholder={customer.email} ref={input => {this.email=input}}  /></InputWrapper>
                    <InputWrapper>        <span>age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Input placeholder={customer.age}  ref={input => {this.age=input}} />

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
                    <Button onClick={()=>this.changeAccount(this.userName.value,this.password.value,this.phoneNumber.value,this.email.value,this.age.value,this.gender.value,this.vegType.value)}>Submit</Button>


            </AccountManageWrapper>
        )
    }
}

export default AccountManage