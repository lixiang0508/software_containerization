import React,{PureComponent} from 'react';
import {Link, Redirect} from "react-router-dom";

import axios from "axios";
import {
    LeftWrapper,
    NavWrapper,
    NavNode,
    MiddleWrapper,
    ProductWrapper,
    Product,
    ImgBox,
    ProductInfo,
    Tags,PriceVal,Producer
} from "./style";
import {PATH} from "../../redux/constant";

export default class VegMall extends PureComponent{
    state={productList:[]}

    componentDidMount() {
        axios.get(PATH+`product/all`).then(
            res=>{
                console.log('所有商品数据',res.data.data);
                let errcode =res.data.err;
                if(errcode!==0){
                    console.log('未请求成功')
                }else{
                    this.setState({productList:res.data.data})
                }
            }
        )
    }


    render(){
        const {productList} = this.state
        return(
            <div>
                <LeftWrapper>
                    <NavWrapper>
                        <NavNode>
                           Vegan Meat
                        </NavNode>
                        <NavNode>
                            Vegan Snacks
                        </NavNode>
                        <NavNode>
                            Vegan Cakes
                        </NavNode>
                        <NavNode>
                            For Pets
                        </NavNode>
                        <NavNode>
                            Vegan Diary
                        </NavNode>
                        <NavNode>
                            Nutrition
                        </NavNode>
                        <NavNode>
                            Baby Food
                        </NavNode>
                        <NavNode>
                            Beverage
                        </NavNode>
                        <NavNode>
                            Shoes
                        </NavNode>

                    </NavWrapper>

                </LeftWrapper>
                <MiddleWrapper>

                    <ProductWrapper>
                        {
                            productList.map(
                                (item)=>{
                                    return(
                                        <Link key={item.id} to={'/product/' + item.id}>
                                        <Product >
                                            <ImgBox>
                                                <img src={`../../../images/products/`+item.imgList[0].src}/>
                                                {item.alt?  <span >{item.alt}</span>:''}
                                            </ImgBox>
                                            <ProductInfo>
                                                <p className="attrs">
                                                    {item.tag? <Tags>{item.tag}</Tags>:''}

                                                </p>
                                                <h3 className="name">{item.name}</h3>
                                                <p className="price">
                                                    <PriceVal> ${item.price}</PriceVal>
                                                    <Producer>{item.producer}</Producer>
                                                </p>

                                            </ProductInfo>
                                        </Product>
                                        </Link>

                                    )
                                }
                            )
                        }
                        <Product>
                            <ImgBox>
                            <img src={`../../../images/products/prod1.jpeg`}/>
                            <span >2 favor</span>
                            </ImgBox>
                            <ProductInfo>
                                <p className="attrs">
                                    <Tags>blust</Tags>
                                    <Tags>On sale</Tags>
                                </p>
                                <h3 className="name">This is the name of product</h3>
                                <p className="price">
                                    <PriceVal>$33</PriceVal>
                                    <Producer>Brand producer</Producer>
                                </p>

                            </ProductInfo>
                        </Product>

                    </ProductWrapper>
                </MiddleWrapper>

            </div>
        )
    }
}