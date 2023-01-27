import React,{PureComponent} from 'react';
import {Link, Redirect} from "react-router-dom";
import {NavWrapper, RestaurantWrapper,CafesWrapper,Cafe,CafeInfo,
    CafeCity,CafeScore,CafeAddress,CafePrice,CafeName
} from "./style";
import axios from "axios";
import {PATH} from "../../redux/constant";

class Restaurant extends  PureComponent{
    state ={cafes:[]}
    componentDidMount() {
        this.getData()
    }
    getData=()=>{
        //获取所有餐厅
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
    searchByCity= (event)=>{
        const city = event.target.innerHTML;
        console.log('curr city is ',city);
        axios.get(PATH+`restaurant/city?region=`+city).then(
            res=>{
                if(res.data.err!==0){
                    console.log(`获取城市餐厅数据失败`)
                }else{
                    const cafes = res.data.data;
                    this.setState({cafes:cafes})
                }

            }
        )

    }

    render(){
        const {cafes} = this.state;
        return (
            <RestaurantWrapper>


                <NavWrapper>
                    <span onClick={(event)=>{this.searchByCity(event)}}>Beijing</span>
                    <span onClick={(event)=>{this.searchByCity(event)}}>Shanghai</span>
                    <span onClick={(event)=>{this.searchByCity(event)}}>Guangzhou</span>
                    <span  onClick={(event)=>{this.searchByCity(event)}}>Hangzhou</span>
                    <span onClick={(event)=>{this.searchByCity(event)}}>Shenzhen</span>
                    <span onClick={(event)=>{this.searchByCity(event)}}>Tianjin</span>
                    <span onClick={(event)=>{this.searchByCity(event)}}>Shenyang</span>

                    <span>Wulumuqi</span>

                    <input type="text" defaultValue="city" ref={input => {this.city=input}} />
                    <button>Search</button>

                </NavWrapper>

                <CafesWrapper>

                    {
                        cafes.map(
                            (item)=>{
                                return(
                                    <Link key={item.id} to={'/restaurant/' + item.id}>
                                    <Cafe key={item.id}>
                                        <img src={`../../../images/restaurants/`+item.img}/>
                                        <CafeName>{item.name}</CafeName>
                                        <CafeInfo>
                                            <CafeCity>City:{item.region}</CafeCity>
                                            <CafeScore>Score:{item.score}</CafeScore>

                                        </CafeInfo>
                                        <CafeAddress>Address:{item.address} </CafeAddress>
                                        <CafePrice>Average price each person is: ${item.price}</CafePrice>

                                    </Cafe>
                                    </Link>

                                )
                            }
                        )
                    }


                </CafesWrapper>

            </RestaurantWrapper>
        )
    }
}

export default Restaurant;