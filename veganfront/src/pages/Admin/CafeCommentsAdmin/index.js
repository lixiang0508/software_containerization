import React,{PureComponent} from 'react';

import axios from "axios";
import {ProductItem, ProductList,Title} from "../ProductsAdmin/style";
import {PATH} from "../../../redux/constant";

export default class CafeCommentsAdmin extends PureComponent{

    state={cafecomments:[]}
    componentDidMount() {
        axios.get(PATH+`restaurant/allComments`).then(
            res=>{
                if(res.data.err!==0){
                    console.log(`获取餐厅评论失败`)
                }else{
                    this.setState({cafecomments:res.data.data})
                }
            }
        )
    }

    render(){
        return(
            <div>
                <Title>Cafe Comments Management</Title>
                <ProductList>
                    <ProductItem  >
                        <span style={{width:'20px',color:'green'}}>id</span>

                        <span style={{width:'220px',color:'green'}}>customer name</span>

                        <span style={{width:'20px',color:'green'}}>score</span>
                        <span style={{width:'320px',color:'green'}}>comment date</span>
                        <span style={{width:'220px',color:'green',overflow:'hidden'}}>comment</span>


                    </ProductItem>
                    {
                        this.state.cafecomments.map(
                            (item)=>{
                                return(
                                    <ProductItem key={item.id} >
                                        <span style={{width:'20px'}}>{item.id}</span>

                                        <span style={{width:'220px'}}>{item.customerName}</span>
                                        <span style={{width:'20px'}}>{item.score}</span>
                                        <span style={{width:'320px'}}>{item.createTime.substr(0,19)}</span>
                                        <span style={{width:'220px',overflow:'hidden'}}>{item.comment}</span>





                                        <button>Delete</button>



                                    </ProductItem>

                                )
                            }
                        )
                    }

                </ProductList>

            </div>
        )
    }
}