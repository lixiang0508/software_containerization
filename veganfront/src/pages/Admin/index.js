import React,{PureComponent} from 'react';
import axios from "axios";
import {NavWrapper} from "../Restaurant/style";
import{AdminWrapper} from "./style"
import ProductsAdmin from "./ProductsAdmin";
import CustomerAdmin from "./CustomerAdmin";

import BlogsAdmin from "./BlogsAdmin"

import CafeAdmin from "./CafeAdmin";
import CafeCommentsAdmin from "./CafeCommentsAdmin";
import BlogCommentsAdmin from "./BlogCommentsAdmin";
import FriendsAdmin from "./FriendsAdmin";

class Admin extends PureComponent{

    state={status:0}
    changeStatus=(id)=>{
        this.setState({status:id})
    }
    render(){
        const {status} = this.state;
        return(
            <div>
                <NavWrapper>
                    <span onClick={()=>{this.changeStatus(1)}}>Blogs</span>
                    <span onClick={()=>{this.changeStatus(2)}}>Customers</span>
                    <span onClick={()=>{this.changeStatus(0)}}>Products</span>
                    <span  onClick={()=>{this.changeStatus(3)}}>Friends</span>
                    <span  onClick={()=>{this.changeStatus(6)}}>Restaurants</span>
                    <span  onClick={()=>{this.changeStatus(4)}}>Blog Comments</span>
                    <span  onClick={()=>{this.changeStatus(5)}}>Restaurant Comments</span>





                </NavWrapper>
                <AdminWrapper>
                    {
                        status==0?<ProductsAdmin></ProductsAdmin>:
                            status==2?<CustomerAdmin></CustomerAdmin>:
                                status==1?<BlogsAdmin></BlogsAdmin>:
                                    status==6?<CafeAdmin></CafeAdmin>:
                                        status==5?<CafeCommentsAdmin></CafeCommentsAdmin>:
                                            status==4?<BlogCommentsAdmin></BlogCommentsAdmin>:
                                                status==3?<FriendsAdmin></FriendsAdmin>:

                            ''

                    }

                </AdminWrapper>

            </div>

        )
    }
}
export default Admin;