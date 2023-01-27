import React,{PureComponent} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {CartItem, Container, Header, ProductItems,ProductItem, ProductTitle, Price, Amount, Delete,
    CheckOut,Chosen,TotalPrice,CheckOutButton,ItemTotalPrice} from "./style";
import {Link, Redirect} from "react-router-dom";
import {PATH} from "../../redux/constant";


class Cart extends PureComponent{
    state={productList: [],totalPrice:0,chosenAmount:0}
    changeAmount=(id)=>{


        //console.log(event);
        console.log('购物车id是',id)

        //修改选中状态
        axios.get(PATH+`cart/changeSelectStatus?cartId=`+id,{
            headers:{
                'token':localStorage.getItem('user_token')
            }
        }).then(
            res =>{
                console.log('修改状态返回结果是',res.data)
                if(res.data.err!==0){
                    console.log('修改状态失败')
                }else{
                    this.getData()
                }
            }

        ).catch(
            err=>{
                console.log('err is',err)
            }
        )


       // console.log('总计被选中的商品数量是',this.state.productCount)

    }
    getData=()=>{
        //查找购物车总体数据
        axios.get(PATH+`cart/selectCart`,{
            headers:{
                'token':localStorage.getItem('user_token')
            }
        }).then(
            res=>{
                let errcode=res.data.err;
                if(errcode!=0){
                    console.log('请求cart 数据失败')
                }else{
                    this.setState({productList:res.data.data})
                }
            }
        )

        //查找总价格
        axios.get(PATH+`cart/totalPrice`,{
            headers:{
                'token':localStorage.getItem('user_token')
            }
        }).then(
            res=>{
                let errcode=res.data.err;
                if(errcode!=0){
                    console.log('请求cart总价格失败')
                }else{
                    this.setState({totalPrice:res.data.data})
                }
            }
        )

        axios.get(PATH+`/cart/chosen`,{
            headers:{
                'token':localStorage.getItem('user_token')
            }}).then(
            res=>{
                let errcode=res.data.err;
                if(errcode!=0){
                    console.log('请求cart总选中数量失败')
                }else{
                    this.setState({chosenAmount:res.data.data})
                }
            }

        )

    }
    deleteCart =(id)=>{
        axios.delete(PATH+`cart/delete?productId=`+id,{
            headers:{
                'token':localStorage.getItem('user_token')
            }
        }).then(
            res=>{
                console.log(res.data);
                let errcode=res.data.err;
                if(errcode!=0){
                    console.log('删除cart 数据失败')}
                else{
                    alert('删除cart 成功')
                    this.getData();
                }

            }
        )

    }
    //修改商品选中数量
    changeProductCount=(event,cartId)=>{
        let quantity = event.target.value;
        axios.get(PATH+`cart/changeCount?cartId=`+cartId+`&quantity=`+quantity,{
            headers:{
                'token':localStorage.getItem('user_token')
            }
        }).then(
            res=>{
                let errcode =res.data.err;
                if(errcode!==0){
                    console.log('修改购买数量失败')
                }else{
                    console.log('修改选中数量成功')
                    this.getData()
                }
            }
        )

    }
    componentDidMount() {

        this.getData();

    }

    render(){
        /*
        if(!this.props.loginStatus){
            return <Redirect to='/login'></Redirect>}

         */



        return(
            <Container>


                {
                    this.state.productList.map(
                        (item)=>{
                            let quant= item.quantity;
                            return(

                                <CartItem key={item.id}>
                                    <Header>
                                        <input type="checkbox" className="shop_checkbox"  />
                                        <span className="shop_name">{item.producer}</span>
                                    </Header>

                                    <ProductItems>
                                        <ProductItem>
                                            <input type="checkbox" className="item_checkbox" checked={!!item.productSelected}
                                                   onChange={()=>this.changeAmount(item.id)}/>
                                            <img className="item_img" src={`../../../images/products/`+item.productSrc}/>
                                            <ProductTitle>
                                                {item.productName}
                                            </ProductTitle>
                                            <Price>
                                                unit price: $<span>{item.price}</span>
                                            </Price>
                                            <Amount>

                                                <input type="number" className="product_amount" defaultValue={quant}

                                                onChange={(event)=>{this.changeProductCount(event,item.id)}}></input>


                                            </Amount>

                                            <ItemTotalPrice>
                                                total price: <span>${item.quantity * item.price}</span>
                                            </ItemTotalPrice>
                                            <Delete onClick={()=>{this.deleteCart(item.productId)}}>
                                                Delete
                                            </Delete>

                                        </ProductItem>
                                    </ProductItems>
                                </CartItem>

                            )
                        }
                    )
                }




                    <CheckOut>
                        <Chosen>
                          <span>Chose products:{this.state.chosenAmount}</span>
                        </Chosen>
                        <TotalPrice>
                            Total price is <span>${this.state.totalPrice}</span>
                        </TotalPrice>
                     <Link to="/checkout" >  <CheckOutButton>
                            Check Out
                        </CheckOutButton>
                     </Link>
                    </CheckOut>






            </Container>
        )
    }
}

const mapState =(state)=>({
    //获取登录状态
    loginStatus:state.getIn(['login','login'])
})

export default connect(mapState,null)(Cart)