import React,{PureComponent} from 'react';
import {PATH} from "../../../../redux/constant";
import {AddressWrapper,Title,DefaultAddr,AddNewAddr,AddrList,AddrItem} from "./style"
import axios from "axios";
class Address extends PureComponent{
    state={addressList:[]}
    componentDidMount() {
        this.getData()

    }
    getData(){
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
    //添加新地址
    addNew=(province,city,address,zip,receiverName,phone)=>{
        axios.post(PATH+`shipping/add`,{
            headers:{
                'token':localStorage.getItem('user_token')
            },
            receiverProvince:province,
            city:city,
            address:address,
            zip:zip,
            receiverName:receiverName,
            receiverMobile:phone


        }).then(
            res=>{
                if(res.data.err!==0){
                    console.log(res.data)
                    alert(`Fail to add new address`)
                }else{
                    alert(`Add address success`)
                }
            }
        )
    }
    //删除
    deleteAddr=(id)=>{
        axios.post(PATH+`shipping/delete/`+id,{
            headers:{
                'token':localStorage.getItem('user_token')
            }

        }).then(
            res=>{
                if(res.data.err!==0){
                    console.log(res.data)
                    alert(`Fail to add delete address`)
                }else{
                    alert(`Delete address success`)
                }
            }
        )

    }

    //修改地址
    changeAddr=(id,province,city,address,zip,phone,receiverName)=>{
        axios.post(PATH+`shipping/change`,{
            headers:{
                'token':localStorage.getItem('user_token')
            },
            id:id,
            receiverName:receiverName,
            receiverMobile:phone,
            receiverCity:city,
            receiverAddress:address,
            receiverZip:zip

        }).then(
            res=>{
                if(res.data.err!==0){
                    console.log(res.data)
                    alert(`Fail to add change address`)
                }else{
                    alert(`Change address success`)
                }

            }
        )

    }

    render(){
        return(
            <AddressWrapper>
                <Title>Address Management</Title>
                <DefaultAddr>
                    <span>Choose default addr:</span>&nbsp; &nbsp;&nbsp; &nbsp;
                    <select ref={input => {this.defaultAddr =input}}>
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

                </DefaultAddr>
                <AddNewAddr>
                    <p>Add a new address</p>
                    Province  <input type="text" ref={input => {this.shengqu=input}}/>
                    City <input type="text" ref={input => {this.chengshi=input}}/>
                    Address<input type="text"ref={input => {this.dizhi=input}}/>
                    Zip<input type="text" ref={input => {this.youbian=input}}/>
                    Phone<input type="text" ref={input => {this.dianhua=input}}/>
                    Receiver<input type="text" ref={input => {this.shoujianren=input}}/>
                    &nbsp;

                    <button onClick={()=>this.addNew(this.shengqu.value,this.chengshi.value,this.dizhi.value,this.youbian.value,this.shoujianren.value,this.dianhua.value)}>Add</button>

                </AddNewAddr>
                <Title>Address List</Title>
                <AddrList>


                    {
                        this.state.addressList.map(
                            (item)=>{
                                return(
                                    <AddrItem key={item.id}>
                                        <input type="text" placeholder={item.receiverProvince} ref={input => {this.province=input}}/> <span>Province </span>
                                        <input type="text" placeholder={item.receiverCity} ref={input => {this.city=input}}/> <span>City </span>
                                        <input type="text" placeholder={item.receiverAddress} ref={input => {this.address=input}}/> <span>Address </span>
                                        <input type="text" placeholder={item.receiverZip} ref={input => {this.zip=input}}/> <span>Zip </span>
                                        <input type="text" placeholder={item.receiverMobile} ref={input => {this.phone=input}}/> <span>Phone</span>
                                        <input type="text" placeholder={item.receiverName} ref={input => {this.receiverName=input}}/>  <span>Receiver</span>
                                        &nbsp;<button onClick={()=>this.changeAddr(item.id,this.province.value,this.city.value,this.address.value,this.zip.value,this.phone.value,this.receiverName.value)}>Change</button>&nbsp; &nbsp;
                                        <button onClick={()=>this.deleteAddr(item.id)}>Delete</button>

                                    </AddrItem>

                                )
                            }
                        )
                    }


                </AddrList>

            </AddressWrapper>
        )
    }
}

export default Address;