import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {CustomerAdminWrapper,Title} from "./style"
import {ProductItem, ProductList} from "../ProductsAdmin/style";
import axios from "axios";
import {PATH} from "../../../redux/constant";

class CustomerAdmin extends PureComponent{


    state={customerList:[],vegType:['NOT','VEGETARIAN','EGG','MILK','FRUIT','VEGAN']}
    componentDidMount() {
        axios.get(PATH+`customer/all`).then(
            res=>{
                if(res.data.err!==0){
                    console.log(`获取所有cus失败`)
                }else{
                    this.setState({customerList:res.data.data})
                }
            }

        )

    }


    render(){
        return(
            <CustomerAdminWrapper>
                <Title>Customer admin</Title>

                <ProductList>
                    <ProductItem  >
                        <span style={{width:'20px',color:'green'}}>id</span>
                        <span style={{width:'120px',color:'green'}}>userName</span>
                        <span style={{width:'20px',color:'green'}}>age</span>
                        <span style={{width:'50px',color:'green'}}>gender</span>
                        <span style={{color:'green'}}>phoneNumber</span>
                        <span  style={{color:'green'}}>veg-type</span>







                    </ProductItem>


                    {
                        this.state.customerList.map(
                            (item)=>{
                                return(
                                    <ProductItem key={item.id} >
                                        <span style={{width:'20px'}}>{item.id}</span>
                                        <span style={{width:'120px'}}>{item.userName}</span>
                                        <span style={{width:'20px'}}>{item.age}</span>
                                        <span style={{width:'50px'}}>{item.gender==1?'female':'male'}</span>
                                        <span style={{width:'140px'}}>{item.phoneNumber}</span>
                                        <span>{this.state.vegType[item.vegType]}</span>



                                        <button>Delete</button>



                                    </ProductItem>

                                )
                            }
                        )
                    }


                </ProductList>


            </CustomerAdminWrapper>
        )

    }
}

export default CustomerAdmin