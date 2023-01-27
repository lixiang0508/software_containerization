import React,{PureComponent} from 'react';
import {Link, Redirect} from "react-router-dom";
import {

    Name,
    Age,
    ContentWrapper,
    ImgWrapper,Expectation,
   SmallBox,
    UpperWrapper,Info,InfoWrapper
} from "./style";
import {CafePrice} from "../Restaurant/style";
import axios from "axios";
import {PATH} from "../../redux/constant";


class FriendsDetail extends PureComponent{
    state={friend:{}}

    componentDidMount() {
        const id= this.props.match.params.id;
        this.getData(id)

    }
    getData(id){
        axios.get(PATH+`friend/`+id).then(
            res=>{
                if(res.data.err!==0){
                    console.log(`获取friend详情失败`)
                }else{
                    console.log(`获取friend详情成功`)
                    this.setState({friend:res.data.data})
                }
            }
        )

    }

    render(){
        const {friend} = this.state;
        return(


            <ContentWrapper>

                <UpperWrapper>
                    <ImgWrapper>
                    <img src={`../../../images/friends/`+friend.pic}/>
                        <SmallBox>
                            Atheism
                        </SmallBox>
                    </ImgWrapper>

                <InfoWrapper>
                    <Name>
                        My name is:{friend.name}
                    </Name>
                    <Age>
                        My age is:{friend.age}
                    </Age>
                    <Age>
                       I have been a vegan for {friend.vegAge} years
                    </Age>
                    <Age>
                       Contact me:{friend.contact}
                    </Age>

                    <Expectation>
                       My expectation is {friend.expectation}
                    </Expectation>

                    <Info>
                   {friend.intro}
                    </Info>
                </InfoWrapper>
                </UpperWrapper>


            </ContentWrapper>
        )
    }
}

export default FriendsDetail;