import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import axios from "axios";
import {ContentWrapper,ImgWrapper,InfoWrapper,CafeName,CafeAddress,CafeScore,CafeDesc,SmallBox
,CommentBody, CommentFooter, CommentTitle, CommentWrapper,UpperWrapper,Score} from "./style"
import {CafePrice} from "../Restaurant/style";
import {CommentContent, Commenter, CommentItem, CommentList} from "../BlogDetail/style";
import {PATH} from "../../redux/constant";





class RestaurantDetail extends  PureComponent{
    state ={cafe:{},comments:[]}
    componentDidMount() {
       const cafeId= this.props.match.params.id;
       this.getData(cafeId)

    }
    getData=(cafeId)=>{
        axios.get(PATH+`restaurant/`+cafeId).then(
            res=>{
                if(res.data.err!==0){
                    console.log('请求饭店详情数据失败')
                }else{
                    console.log('请求饭店详情数据成功')
                    const cafe = res.data.data
                    this.setState({cafe:cafe})

                }
            }
        )
        axios.get(PATH+`restaurant/comment/`+cafeId).then(
            res=>{
                if(res.data.err!==0){
                    console.log('请求饭店评论数据失败')
                }else{
                    console.log('请求饭店评论数据成功')
                    const comments = res.data.data
                    console.log(comments)
                    this.setState({comments:comments})

                }

            }
        )

    }
    //发表评论
    publishComment = (id,commentText,score)=>{
        axios.post(PATH+'addCafeComment',
            {
                headers:{
                    'token':localStorage.getItem('user_token')
                },
                score:score,
                restaurantId:id,
                comment:commentText

            }).then(
            res=>{
                let errcode= res.data.err;

                console.log('添加评论返回',res);
                if(errcode===0){
                    alert('Comment added success')
                    this.setState({'':''})
                }else{
                    alert('Comment added failed')
                }
            }
        )

    }

    render(){
        const {cafe,comments} = this.state;
        const image=cafe.img;
        return (
            <ContentWrapper>
              <UpperWrapper>
                <ImgWrapper>
                    <img src={`../../../images/restaurants/`+image} alt="cafe-pic" />
                </ImgWrapper>
                <InfoWrapper>
                    <CafeName>
                        {cafe.name}
                    </CafeName>
                    <CafeScore>
                      Score: {cafe.score}
                    </CafeScore>
                    <CafeAddress>
                        {cafe.address}
                    </CafeAddress>
                    <CafePrice>
                        Average price : ${cafe.price}/person
                    </CafePrice>
                    <SmallBox>
                        Vegan Friendly
                    </SmallBox>
                    <CafeDesc>
                        {cafe.info}
                    </CafeDesc>

                </InfoWrapper>
              </UpperWrapper>
                <CommentWrapper>
                    <CommentTitle>
                        <span>How do you comment this cafe?</span>
                    </CommentTitle>
                    <CommentBody>
                        <Score><span>Your score here:</span><input type="number" ref={input => {this.score=input}}/></Score>
                        <textarea cols="50" rows="6" placeholder="Leave your comment!" ref={input => {this.commentText=input}}></textarea>
                        <button onClick={()=>this.publishComment(this.props.match.params.id,this.commentText.value,this.score.value)}>Publish comment</button>
                    </CommentBody>
                    <CommentFooter>
                        <p><span></span><span></span></p>
                    </CommentFooter>
                </CommentWrapper>
                <CommentList>
                    <p>Comments</p>


                    {
                        comments.map( (item)=>{
                                return (
                                    <CommentItem key={item.id}>
                                        <Commenter>
                                            {item.customerName} &nbsp;<span>{item.createTime.substr(0,10)}</span>
                                        </Commenter>
                                        <CommentContent>
                                            {item.comment}
                                        </CommentContent>

                                    </CommentItem>

                                )
                            }

                        )
                    }



                </CommentList>

            </ContentWrapper>
        )
    }
}

export default RestaurantDetail;