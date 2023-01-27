import React,{PureComponent} from 'react';
import axios from "axios";
import {ProductItem, ProductList, Title} from "../ProductsAdmin/style";
import {PATH} from "../../../redux/constant";

export default class BlogCommentsAdmin extends PureComponent{
    state={blogComments:[]}
    componentDidMount() {
        axios.get(PATH+`blogComment/all`).then(
            res=>{
                if(res.data.err!==0){
                    console.log(`查找评论全部 失败`)
                }else{
                    this.setState({blogComments:res.data.data})
                }
            }
        )
    }

    render(){
        return(
            <div>
                <Title>Blog Comments Management</Title>
                <ProductList>
                    <ProductItem  >
                        <span style={{width:'20px',color:'green'}}>id</span>
                        <span style={{width:'20px',color:'green'}}>blog</span>
                        <span style={{width:'220px',color:'green'}}>commenter</span>
                        <span style={{width:'320px',color:'green'}}>comment date</span>
                        <span style={{width:'220px',color:'green',overflow:'hidden'}}>comment</span>


                    </ProductItem>
                    {
                        this.state.blogComments.map(
                            (item)=>{
                                return(
                                    <ProductItem key={item.id} >
                                        <span style={{width:'20px'}}>{item.id}</span>

                                        <span style={{width:'20px'}}>{item.blogId}</span>
                                        <span style={{width:'220px'}}>{item.customerName}</span>
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