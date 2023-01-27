import React,{PureComponent} from 'react';
import axios from "axios";
import {ProductItem, ProductList, Title} from "../ProductsAdmin/style";
import {AddCafe,AddItem,AddIntro,Subtitle} from "./style"
import {PATH} from "../../../redux/constant";


class CafeAdmin extends PureComponent{
    state={cafes:[]}
    componentDidMount() {
        axios.get(PATH+`restaurant/all`).then(
            res=>{
                if(res.data.err!==0){
                    console.log(`获取餐厅数据失败`)
                }else{
                    const cafes = res.data.data;
                    this.setState({cafes:cafes})
                }
            }
        )
    }


    render(){
        return(
            <div>
                <Title>Restaurant Management</Title>
                <Subtitle>Add a Restaurant</Subtitle>
                <AddCafe>
                    <AddItem>
                        <span>Name</span><input type="text"/>
                    </AddItem>
                    <AddItem>
                        <span>Region</span><input type="text"/>
                    </AddItem>
                    <AddItem>
                        <span>Address</span><input type="text"/>
                    </AddItem>
                    <AddItem>
                        <span>Type</span><input type="text"/>
                    </AddItem>
                    <AddItem>
                        <span>Price</span><input type="text"/>
                    </AddItem>
                    <AddIntro>
                        <p>Detail</p>
                        <textarea rows="10" cols="44"/>
                        <button>Submit</button>

                    </AddIntro>

                </AddCafe>
                <Subtitle>Update a Restaurant</Subtitle>
                <AddCafe>
                    <AddItem>
                        <span>id</span><input type="text"/>
                    </AddItem>
                    <AddItem>
                        <span>Name</span><input type="text"/>
                    </AddItem>
                    <AddItem>
                        <span>Region</span><input type="text"/>
                    </AddItem>
                    <AddItem>
                        <span>Address</span><input type="text"/>
                    </AddItem>
                    <AddItem>
                        <span>Type</span><input type="text"/>
                    </AddItem>
                    <AddItem>
                        <span>Price</span><input type="text"/>
                    </AddItem>
                    <AddIntro>
                        <p>Detail</p>
                        <textarea rows="10" cols="44"/>
                        <button>Submit</button>

                    </AddIntro>
                </AddCafe>
                <Subtitle>Cafe List</Subtitle>
                <ProductList>
                    <ProductItem  >
                        <span style={{width:'20px',color:'green'}}>id</span>
                        <span style={{width:'220px',color:'green'}}>region</span>
                        <span style={{width:'400px',color:'green'}}>name</span>








                    </ProductItem>
                    {
                        this.state.cafes.map(
                            (item)=>{
                                return(
                                    <ProductItem key={item.id} >
                                        <span style={{width:'20px'}}>{item.id}</span>
                                        <span style={{width:'220px'}}>{item.region}</span>
                                        <span style={{width:'400px'}}>{item.name}</span>




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

export default CafeAdmin;
