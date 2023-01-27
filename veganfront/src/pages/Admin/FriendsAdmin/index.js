import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import axios from "axios";
import {ProductItem, ProductList, Title} from "../ProductsAdmin/style";
import {PATH} from "../../../redux/constant";

class FriendsAdmin extends PureComponent{

    state={friends:[]}
    componentDidMount() {
        axios.get(PATH+`friend/all`).then(
            res=>{
                if(res.data.err!==0){
                    console.log('获取全部friend失败')
                }else{
                    this.setState({friends:res.data.data})
                }
            }
        )

    }


    render(){
        return(
            <div>
                <Title>Friend Management</Title>
                <ProductList>
                    <ProductItem  >
                        <span style={{width:'20px',color:'green'}}>id</span>

                        <span style={{width:'220px',color:'green'}}> name</span>

                        <span style={{width:'220px',color:'green',overflow:'hidden'}}>intro</span>
                        <span style={{width:'220px',color:'green',overflow:'hidden'}}>expectation</span>


                    </ProductItem>
                    {
                        this.state.friends.map(
                            (item)=>{
                                return(
                                    <ProductItem key={item.id} >
                                        <span style={{width:'20px'}}>{item.id}</span>

                                        <span style={{width:'220px'}}>{item.name}</span>
                                        <span style={{width:'20px'}}>{item.score}</span>

                                        <span style={{width:'220px',overflow:'hidden'}}>{item.intro}</span>
                                        <span style={{width:'220px',overflow:'hidden'}}>{item.expectation}</span>





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

export default FriendsAdmin