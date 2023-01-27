import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {Title} from "../CustomerAdmin/style";
import {ProductItem, ProductList} from "../ProductsAdmin/style";
import axios from "axios";
import {PATH} from "../../../redux/constant";

class BlogsAdmin extends PureComponent{

     state={blogList:[]}
    componentDidMount() {
        axios.get(PATH+`blog/all`).then(
            res => {
                console.log(res.data);
                const resp= res.data.data;
                this.setState({blogList:resp})

            },
            error=>{
                console.log(error);
            }
        );

    }


    render(){
        return(
            <div>
            <Title>Blog admin</Title>
                <ProductList>
                    <ProductItem  >
                        <span style={{width:'20px',color:'green'}}>id</span>
                        <span style={{width:'220px',color:'green'}}>authorName</span>
                        <span style={{width:'400px',color:'green'}}>title</span>








                    </ProductItem>
                    {
                        this.state.blogList.map(
                            (item)=>{
                                return(
                                    <ProductItem key={item.id} >
                                        <span style={{width:'20px'}}>{item.id}</span>
                                        <span style={{width:'220px'}}>{item.authorName}</span>
                                        <span style={{width:'400px'}}>{item.title}</span>




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

export default BlogsAdmin