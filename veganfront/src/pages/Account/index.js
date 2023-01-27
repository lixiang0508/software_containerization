import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {NavWrapper} from "../Restaurant/style";
import {AccountWrapper} from "./style"
import AccountManage from "./components/AccountManage";
import Address from "./components/Address"
import Orders from "./components/Orders";
import BlogManage from "./components/Blog"

class Account extends PureComponent{
    state={status:0}
    changeStatus=(id)=>{
        this.setState({status:id})
    }


    render(){
        const {status} = this.state;

        return(
            <div>
                <NavWrapper>
                    <span onClick={()=>{this.changeStatus(1)}}>My Address</span>
                    <span onClick={()=>{this.changeStatus(0)}}>My account</span>
                    <span onClick={()=>{this.changeStatus(2)}}>My blogs</span>
                    <span  onClick={()=>{this.changeStatus(3)}}>My friends</span>
                    <span onClick={()=>{this.changeStatus(4)}}>My Orders</span>



                </NavWrapper>
                <AccountWrapper>
                    {
                        this.state.status===0?<AccountManage></AccountManage>:
                            this.state.status==1?<Address></Address>:
                                this.state.status==4?<Orders></Orders>:
                                    this.state.status==2?<BlogManage></BlogManage>:



                            ''
                    }


                </AccountWrapper>

            </div>
        )
    }
}

export default Account