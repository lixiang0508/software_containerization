import React,{PureComponent} from 'react';
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import {FriendWrapper,PostMessage,FriendMessages,FriendItem,PersonName,PersonInfo,PersonAge,PersonVegAge,PersonReligion} from "./style"
import {PATH} from "../../redux/constant";


class Friends extends PureComponent{
    state={friendList:[]}
    componentDidMount() {
        this.getData()

    }
    getData(){
        axios.get(PATH+`friend/all`).then(
            res=>{
                if(res.data.err!=0){
                    console.log(`加载friend数据失败`)
                }else{
                  const list=  res.data.data;
                  this.setState({friendList:list})
                }
            }
        )
    }

    render() {
        return(
            <FriendWrapper>
                <Link to="/writeFriend">
                <PostMessage>
                  Post a message
                </PostMessage>
                </Link>
                <FriendMessages>
                    {
                        this.state.friendList.map(
                            (item)=>{
                                return(
                                    <Link to={`friend/`+item.id} key={item.id}>
                                    <FriendItem >
                                        <img src={`../../../images/friends/`+item.pic}/>
                                        <PersonName>{item.name}</PersonName>
                                        <PersonInfo>
                                            <PersonAge>Age:{item.age}</PersonAge>
                                            <PersonVegAge>Vegan age:{item.vegAge}</PersonVegAge>

                                        </PersonInfo>
                                        <PersonReligion>Religion: {
                                           item.religionName.length>0? item.religionName:'Atheism'}
                                        </PersonReligion>



                                    </FriendItem>
                                    </Link>

                                )
                            }
                        )
                    }


                    <FriendItem>
                        <img src={`../../../images/friends/friend5.jpeg`}/>
                        <PersonName>Veg Price</PersonName>
                        <PersonInfo>
                            <PersonAge>Age:18</PersonAge>
                            <PersonVegAge>Vegan age:18</PersonVegAge>

                        </PersonInfo>
                        <PersonReligion>Religion: Atheism </PersonReligion>



                    </FriendItem>

                </FriendMessages>

            </FriendWrapper>
        )
    }
}

export default Friends;