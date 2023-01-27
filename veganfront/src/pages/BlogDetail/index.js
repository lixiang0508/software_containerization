
import React,{PureComponent} from 'react';
import {DetailWrapper,Header,Content,Text,CommentWrapper,CommentTitle,CommentBody,CommentFooter,CommentList,CommentItem,Commenter,CommentContent} from "./style";
import {connect} from "react-redux";
import {actionCreator} from "./store"
import {withRouter} from "react-router-dom";
import axios from "axios";

class BlogDetail extends PureComponent {
      state={blogCommentList:[]}
     componentDidMount() {
         const blogId=this.props.match.params.id;
         this.props.getBlogDetail(blogId);
         //请求当前blog的所有评论
         axios.get(`http://localhost:8085/blogComment/check/`+blogId).then(
             res => {
                 console.log(res.data);
                 const resp= res.data.data;
                 this.setState({blogCommentList:resp})

             },
             error=>{
                 console.log(error);
             }
         );

     }


     publishComment = (id,commentText)=>{
          axios.post('http://localhost:8085/blogComment/add',
              {
                  headers:{
                      'token':localStorage.getItem('user_token')
                  },
          blogId:id,
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
         console.log('当前props',this.props);
         const {blogCommentList} = this.state;
        return (
            <DetailWrapper>
                <Header>{this.props.title} </Header>
                <Content>
                  <img src={`../../../images/article`+this.props.match.params.id+`.jpeg`} />

                    <Text dangerouslySetInnerHTML={{__html:this.props.content}} >

                    </Text>


                </Content>
                <CommentWrapper>
                   <CommentTitle>
                     <span>Any feelings?</span>
                   </CommentTitle>
                    <CommentBody>
                        <textarea cols="50" rows="10" placeholder="Leave your comment!" ref={input => {this.commentText=input}}></textarea>
                        <button onClick={()=>this.publishComment(this.props.match.params.id,this.commentText.value)}>Publish comment</button>
                    </CommentBody>
                    <CommentFooter>
                    <p><span>{this.props.hits}&nbsp;</span>Readings,&nbsp;<span>{this.props.comments}</span>&nbsp;Comments</p>
                    </CommentFooter>
                </CommentWrapper>
                <br/>
                <br/>
                <CommentList>
                    <p>Comments</p>


                    {
                        blogCommentList.map( (item)=>{
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
            </DetailWrapper>
        )
    }
}


const mapState = (state)=>({
     title:state.getIn(['blogDetail','title']),
    content:state.getIn(['blogDetail','content']),
    img:state.getIn(['blogDetail','img']),
    hits:state.getIn(['blogDetail','hits']),
    comments:state.getIn(['blogDetail','comments']),
    likes:state.getIn(['blogDetail','likes'])

})

const mapDispatch =(dispatch)=>({
    getBlogDetail(id){
   dispatch(actionCreator.getBlogDetail(id));
    }

})
export default connect(mapState,mapDispatch)(withRouter(BlogDetail));