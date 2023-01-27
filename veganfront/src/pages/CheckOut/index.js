import React,{PureComponent} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {Wrapper,ConfirmOrder,MyAddress,Button1,Button2 } from "./style"
import {Link} from "react-router-dom";
import {PATH} from "../../redux/constant";
class CheckOut extends PureComponent{
    state={addressList:[],price:0,items:0}
    componentDidMount() {
        this.getData()
        axios.get(PATH+`shipping/findAddrs`,{
            headers:{
                'token':localStorage.getItem('user_token')
            }
        }).then(
            res=>{
                if(res.data.err!==0){
                    console.log('获取地址失败')
                }else{
                    console.log('地址列表是',res.data.data)
                    this.setState({addressList:res.data.data})
                }
            }
        )
    }

    getData(){
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
                    this.setState({price:res.data.data})
                }
            }
        )

        axios.get(PATH+`cart/chosen`,{
            headers:{
                'token':localStorage.getItem('user_token')
            }}).then(
            res=>{
                let errcode=res.data.err;
                if(errcode!=0){
                    console.log('请求cart总选中数量失败')
                }else{
                    this.setState({items:res.data.data})
                }
            }

        )
    }

    render(){

        return(
            <div>
                <Wrapper>
                    <ConfirmOrder>Confirm Order </ConfirmOrder>
                        <MyAddress>
                           <span>Choose Address</span>
                            <select ref={input => {this.addr =input}}>
                                {
                                    this.state.addressList.map(
                                        (item)=>{
                                            return(
                                                <option key={item.id} >
                                                    {item.receiverProvince},{item.receiverCity},
                                                    {item.receiverDistrict},{item.reciverAddress},
                                                    {item.receiverZip}

                                                </option>

                                            )
                                        }
                                    )
                                }


                            </select>
                        </MyAddress>
                    <p>ReceiverName:</p> <input style={{'margin-left':'10px'}} type="text" />

                    <p>ReceiverPhone:</p> <input style={{'margin-left':'10px'}} type="text" />
                    <p>Overall: {this.state.items} items</p>

                    <p>Price: ${this.state.price}</p>
             <Link to="/cart" >   <Button1>Back To Cart</Button1></Link>
                    <Button2 >Pay Now</Button2>


                </Wrapper>

            </div>
        )
    }

}


export default CheckOut