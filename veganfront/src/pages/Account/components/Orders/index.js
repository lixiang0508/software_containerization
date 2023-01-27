import React,{PureComponent} from 'react';
import {OrdersWrapper,Title,OrderList,OrderItem} from "./style";
import axios from "axios";
import {PATH} from "../../../../redux/constant";
class Orders extends PureComponent{

    state={orders:[],status:['Wait for payment','Wait for delivery','Wait for receipt','Wait for comment','Finished','Closed']}
 componentDidMount() {
     axios.get(PATH+`order/all`,{
         headers:{
             'token':localStorage.getItem('user_token')
         }
     }).then(
         res=>{
             if(res.data.err!==0){
                 console.log(`获取全部订单失败`)
             }else{
                 this.setState({orders:res.data.data})
             }
         }
     )
 }

    handleOrder=(status,id)=>{
        if(status==6){
            //删除订单
            axios.delete(PATH+`delete`+id).then(
                res=>{
                    if(res.data.err!==0){
                        alert('Fail to delete order')
                    }else{
                        alert('Delete order success')
                    }
                }
            )

        }
    }
    render() {
        return(
            <OrdersWrapper>
                <Title>Orders Management</Title>
                <OrderList>

                    {
                        this.state.orders.map(
                            (item)=>{
                                return(
                                    <OrderItem key={item.id}>
                                        <span>Order ID:{item.id}</span>
                                        <span>Price:{item.price}</span>
                                        <span>Order Date: {item.orderDate}</span>
                                        <span>Status: {this.state.status[item.status-1]}</span>

                                        <button onClick={()=>{this.handleOrder(item.status,item.id)}}>
                                            {item.status==6?'Delete Order':'Cancel Order'}
                                          </button>
                                    </OrderItem>

                                )
                            }
                        )
                    }


                </OrderList>
            </OrdersWrapper>

        )
    }
}

export default Orders