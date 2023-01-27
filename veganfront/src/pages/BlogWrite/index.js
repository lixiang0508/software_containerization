import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {BlogWriteWrapper,BlogWrapper,Button} from "./style";
import axios from "axios";
import {connect} from "react-redux";
import {PATH} from "../../redux/constant";

 class BlogWrite extends PureComponent{

    postBlog = (title,content,desc)=>{
        axios.post(PATH+'blog/add',
            {
                headers:{
                    'token':localStorage.getItem('user_token')
                },
                title:title,
                text:content,
                desc:desc

            }).then(
            res=>{
                let errcode= res.data.err;

                console.log('添加评论返回',res);
                if(errcode===0){
                    alert('Blog added success')
                    this.setState({'':''})
                }else{
                    alert('Blog added failed')
                }
            }
        )

    }

    render(){

        if(!this.props.loginStatus){
            return <Redirect to='/login'></Redirect>}



        return (
            <BlogWriteWrapper>

                {/* 内容区*/}
                <BlogWrapper>
                    <p>Your title here</p>
                    <br/>
                    <textarea cols="70" rows="2" placeholder="Your title here!" ref={input => {this.title=input}}></textarea>
                    <br/>
                    <br/>
                   <p>Briefly describe the content</p>
                    <textarea cols="70" rows="5" placeholder="Your title here!" ref={input => {this.desc=input}}></textarea>


                    <p>Your content here</p>
                    <br/>
                    <textarea cols="70" rows="8" placeholder="Your blog content here!" ref={input => {this.content=input}}></textarea>


                    <Button onClick={()=>this.postBlog(this.title.value,this.content.value,this.desc.value)}>Post blog</Button>

                </BlogWrapper>

            </BlogWriteWrapper>
        )
    }
}

const mapState =(state)=>({
    //获取登录状态
    loginStatus:state.getIn(['login','login'])
})


export default connect(mapState,null)(BlogWrite)