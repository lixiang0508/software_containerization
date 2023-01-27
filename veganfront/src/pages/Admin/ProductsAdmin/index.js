import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";

import {ProductsAdminMapper,ProductList,ProductItem,Title,AddProduct} from "./style";
import axios from "axios";
import {PATH} from "../../../redux/constant";


class ProductsAdmin extends PureComponent{
  state={productlist:[]}
    componentDidMount() {
      axios.get(PATH+`product/all`).then(
          res=>{
              if(res.data.err!==0){
                  console.log('获取所有订单失败')
              }else{
                  this.setState({productlist:res.data.data})
              }
          }
      )

    }


    render(){
        return(
            <ProductsAdminMapper>
                <Title>Product Management</Title>
                <p className="subtitle">Add product</p>
                <AddProduct>
                    <span>Category</span><input className="categoryInput" type="text"/>
                    <span>name:</span><input className="nameInput" type="text" />
                    <span>price:</span><input type="number" />
                    <span>stock:</span><input type="number"  />
                    <span>subtitle</span> <input type="text" className="cl"/>
                    <p>Product detail</p>
                    <textarea rows="7" cols="40"/>
                    <button>Submit</button>

                </AddProduct>

                <p className="subtitle">Modify product Info</p>
                <AddProduct>
                    <span>Id</span> <input type="number" className="num"/>
                    <span>category</span><input className="num" type="text"/>
                    <span>name:</span><input className="nameInput" type="text" />
                    <span>price:</span><input type="number" />
                    <span>stock:</span><input type="number"  />
                    <span>subtitle</span> <input type="text" className="cl"/>
                    <p>Product detail</p>
                    <textarea rows="7" cols="40"/>
                    <button>Submit</button>

                </AddProduct>

                <p className="subtitle">Product List</p>
                <ProductList>
                    {
                        this.state.productlist.map(
                            (item)=>{
                                return(
                                    <ProductItem key={item.id}>
                                        <span>id:{item.id}</span>
                                        <span>category:</span><input className="categoryInput" type="text" placeholder={item.categoryId}/>
                                        <span>name:</span><input className="nameInput" type="text" placeholder={item.name}/>
                                        <span>price:</span><input type="number" placeholder={item.price}/>
                                        <span>stock:</span><input type="number"  placeholder={item.stock}/>
                                        <button>Change</button>
                                        <button>Delete</button>



                                    </ProductItem>

                                )
                            }
                        )
                    }


                </ProductList>

            </ProductsAdminMapper>
        )

    }
}

export default ProductsAdmin